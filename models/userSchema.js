const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    gender: String,
    address: String,
    password: String,
});

const userSchemaModel = mongoose.model("collection1", userSchema);

module.exports = userSchemaModel;
