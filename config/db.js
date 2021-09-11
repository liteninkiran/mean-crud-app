const mongoose = require('mongoose');

const connectDb = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
/*
            -- Not required for Mongoose v6+
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
*/
        });
        console.log(`Mongo DB connected: ${conn.connection.host}`);
    } catch(err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;
