const mongoose = require('mongoose');

require('dotenv').config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/memes';
const connectDB = async () => {
	try {
		await mongoose.connect(mongoUri);
		console.log('MongoDB connected successfully');
	} catch (error) {
		console.error('MongoDB connection failed:', error.message);
		process.exit(1);
	}
};

module.exports = connectDB;
