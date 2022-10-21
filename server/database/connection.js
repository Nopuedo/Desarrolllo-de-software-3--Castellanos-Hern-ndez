const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        //mongodb connection string
        const con = await mongoose.connect(MONGO_URI = 'mongodb+srv://Eduardo_Castellanos:Cesun.2019@cluster0.twwuyj1.mongodb.net/?retryWrites=true&w=majority', {

        })

        console.log(`MongoDB Connected:${con.connection.host}`);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB