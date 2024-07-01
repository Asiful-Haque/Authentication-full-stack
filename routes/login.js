const express = require ("express");
const { checkUser } = require("../controller/loginController");


const router = express.Router();

router.post("/checkUser",checkUser);

module.exports = router;