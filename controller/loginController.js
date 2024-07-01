const bcrypt = require("bcrypt");
const userSchemaModel = require("../models/userSchema.js");

exports.checkUser = async (req, res) => {
    //const { email, password } = req.body;
    const { Email, Password } = req.body;

    try {
        // Find user by email
        console.log(Email);
        const user = await userSchemaModel.findOne({ Email: Email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        // Compare the password provided
        const isPasswordValid = await bcrypt.compare(Password, user.Password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // If email and password match, user is authenticated
        res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.error(`Error logging in: `, error.message);
        res.status(500).send(`Internal server error`);
    }
};
