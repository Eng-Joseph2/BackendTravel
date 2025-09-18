const express = require("express");
const mongo = require("mongoose");
const cors = require("cors");
const BookingRouter = require("./Routers/BookingRouter");
const RegisterRouter = require("./Routers/RegisterRouter");
const UserRouter = require("./Routers/UserRouter");
const app = express();
app.use(express.json());
app.use(cors());
mongo
  .connect(
    "mongodb+srv://cabdiqaniyacquub8_db_user:SNHsFgZOxPZJjhqE@travel123.sopmlw3.mongodb.net/?retryWrites=true&w=majority&appName=Travel123"
  )
  .then(() => {
    console.log("Sucess COnnected");
  });
app.use(BookingRouter);
app.use(RegisterRouter);
app.use(UserRouter);
app.use("/iamges", express.static("images"));
app.listen(9007, () => console.log("Server is running with port 9007"));
