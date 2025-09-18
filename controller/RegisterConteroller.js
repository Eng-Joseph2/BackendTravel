const RegisterModel = require("../Models/RegisterBooking");
const bcrypt = require("bcryptjs");

// Registration
const CreateRegister = async (req, res) => {
  const { name, phone, email, pass } = req.body;

  const CheckEmail = await RegisterModel.findOne({ email });
  if (CheckEmail)
    return res.status(400).json({ message: "Email already in use" });

  const hashedPass = await bcrypt.hash(pass, 10);

  const newUser = new RegisterModel({
    name,
    phone,
    email,
    pass: hashedPass,
  });

  const savedUser = await newUser.save();
  if (savedUser) return res.status(201).json(savedUser);

  res.status(500).json({ message: "Failed to register" });
};

// Read all registered users
const ReadRegister = async (req, res) => {
  const users = await RegisterModel.find();
  res.status(200).json(users);
};

// Login
const Login = async (req, res) => {
  try {
    const { email, pass } = req.body;

    const user = await RegisterModel.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "This email is not registered" });

    const isMatch = await bcrypt.compare(pass, user.pass);
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { CreateRegister, ReadRegister, Login };
