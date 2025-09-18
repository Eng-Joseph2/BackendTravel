const mango = require("mongoose");

const RegisterSchema = mango.Schema({
  name: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  pass: { type: String, required: true },
});

module.exports = mango.model("RegisterForm", RegisterSchema);
