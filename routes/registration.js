const express = require ("express");
const { addUser } = require("../controller/registrationController");


const router = express.Router();

router.post("/api/submit", addUser);

module.exports = router;


