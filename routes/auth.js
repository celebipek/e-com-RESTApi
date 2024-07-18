const router = require("express").Router();
const User = require("../models/User")

const bcrypt = require("bcrypt");

// register

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

        if (user) return res.status(400).json({ msg: "Kullanıcı zaten var" });

       
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });

        await newUser.save();

        res.json({ msg: "Kullanıcı Oluşturuldu" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
    }
});

