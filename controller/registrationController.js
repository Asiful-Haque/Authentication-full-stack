const bcrypt = require("bcrypt");
const userSchemaModel = require("../models/userSchema.js");

exports.addUser = async (req, res) => {
    // console.log("Received request to add user");
    // console.log("Request body:", req.body); // Log entire request body for inspection

    try {
        const { name, email, gender, address, password } = req.body;
        // console.log("Name:", name); // Log just the Password field to check its value

        // Ensure Password is defined
        // if (!name) {
        //     throw new Error("name is required");
        // }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const newUser = new userSchemaModel({
            name,
            email,
            gender,
            address,
            password: hashedPassword,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        res.status(201).json(savedUser);
    } catch (error) {
        console.error(`Error saving information: `, error.message);
        res.status(500).send(`Internal server error`);
    }
};
