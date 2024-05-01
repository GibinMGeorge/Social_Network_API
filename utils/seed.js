const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usersData, thoughtsData } = require('./data.js')

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('\n-------------- DATABASE SYNCED --------------n');

  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
  
  let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtCheck.length) {
    await connection.dropCollection('thoughts');
  }

  const userSeed = await User.create(usersData);
  const thoughtSeed = await Thought.create(thoughtsData);

  console.log(userSeed);
  console.log('\n-------------- USER DATA SEEDED --------------n');
  console.log(thoughtSeed);
  console.log('\n-------------- THOUGHT DATA SEEDED --------------n');

  console.info('Seeding complete!!');
  
  process.exit(0);
});