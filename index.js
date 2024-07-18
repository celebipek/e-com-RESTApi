const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
dotenv.config();
const app = express();


mongoose.connect(process.env.MONGO_DB_URL)
        .then(() => console.log("Mongo Connection is successfull"))
        .catch((err) => {
            console.log(err);
        });


app.listen(PORT, () => {
    console.log(`Server is Running on PORT ${PORT}`)
})