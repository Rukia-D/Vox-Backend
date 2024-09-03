const fetch = require('node-fetch');
const Officer = require('./models/Officer');
const connectDB = require('./db/connect')
require('dotenv').config()

const createOfficers = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    const response = await fetch('https://api.covid19india.org/state_district_wise.json');
    const data = await response.json();

    const departments = ['Health', 'Education', 'Transport', 'Pension', 'other'];
    const levels = [1, 2, 3];

    // Connect to MongoDB with increased timeout limit
    // await mongoose.connect('mongodb://localhost:27017/myapp', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   connectTimeoutMS: 60000 // 1 minute
    // });

    const batchSize = 100;
    let officerBatch = [];

    let flag = false
    for (const state in data) {
            const districts = data[state].districtData;
            for (const district in districts) {
                const districtWithoutSpaces = district.replace(/ /g, '');
                for (const department of departments) {
                for (const level of levels) {
                    const officer = new Officer({
                        name: 'Officer',
                        email: `${districtWithoutSpaces.toLowerCase()}${department}${level}@gmail.com`,
                        password: 'password',
                        district: district,
                        department: department,
                        level: level
                    });
                    
                    const existingOfficer = await Officer.findOne({ email: officer.email });
                    if (existingOfficer) {
                        continue;
                    }
                    

                    officerBatch.push(officer);

                    if (officerBatch.length === batchSize) {
                    await Officer.insertMany(officerBatch);
                    officerBatch = [];
                    }
                }
                }
            }
        console.log(`${state} populated`)
    }

    if (officerBatch.length > 0) {
      await Officer.insertMany(officerBatch);
    }

    console.log('Officers created successfully!');
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

createOfficers();