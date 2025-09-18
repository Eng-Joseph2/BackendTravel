const UserModel = require("../Models/NewUserBooking");

const CretateUser = async (req, res) => {
  const NewCreate = UserModel(req.body);
  const saveData = await NewCreate.save();
  if (NewCreate) {
    res.send(saveData);
  }
};

const NewRead = async (req, res) => {
  const ReadAll = await UserModel.find();
  if (ReadAll) {
    res.send(ReadAll);
  }
};

const NewDelete = async (req, res) => {
  try {
    const result = await UserModel.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      res.send("Delete Successful");
    } else {
      res.status(404).send("No document found with that ID");
    }
  } catch (error) {
    res.status(500).send("Server error during deletion");
  }
};

// const sendEmail = async (req, res) => {
//   const { id } = req.params;
//   const { type } = req.body;

//   try {
//     const user = await UserModel.findById(id);
//     if (!user) return res.status(404).send("User not found");

//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: "youremail@gmail.com",
//         pass: "yourpassword",
//       },
//     });

//     const mailOptions = {
//       from: "youremail@gmail.com",
//       to: user.email,
//       subject: "Booking Status",
//       text: `Hello ${user.name}, your booking is ${type} successfully!`,
//     };

//     await transporter.sendMail(mailOptions);
//     res.send(`Email sent successfully: ${type}`);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Failed to send email");
//   }
// };

module.exports = { CretateUser, NewRead, NewDelete };
