// const RegisterController = require("../controller/RegisterConteroller");
// const express = require("express");
// const router = express.Router();
// router.post("/registerForm", RegisterController.CreateRegister);
// router.get("/readRegister", RegisterController.ReadRegister);
// router.post("/login", RegisterController.Login);
// module.exports = router;

const UserController = require("../controller/UserController");

const express = require("express");
const router = express.Router();
router.post("/user", UserController.CretateUser);
router.get("/readuser", UserController.NewRead);
router.delete("/deleteuser/:id", UserController.NewDelete);

module.exports = router;
