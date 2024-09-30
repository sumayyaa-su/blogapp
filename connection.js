const mongoose = require("mongoose");
const DB_URL = 'mongodb://localhost:27017/blogDB';

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Database connection error:', err);
});
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = mongoose;



//Write missing code here for database connection





