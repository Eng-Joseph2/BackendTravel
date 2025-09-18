const RegisterController = require("../controller/RegisterConteroller");
const express = require("express");
const router = express.Router();
router.post("/registerForm", RegisterController.CreateRegister);
router.get("/readRegister", RegisterController.ReadRegister);
router.post("/login", RegisterController.Login);
module.exports = router;
