const mongoose = require('mongoose');

const UserSchematSchema = new mongoose.Schema(
    {
        username : {type: String, required:true, unique:true},
        email: {type: String, required: true, unique:true},
        passowrd: {type: String, required: true},
        isAdmin: {
            type: Boolean,
            default: false,
        },
    },
        { timestamps: true }

    
);
module.exports = mongoose.model("User", UserSchema);