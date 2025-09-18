const BookingController = require("../controller/BookingControler");
const express = require("express");
const UploadImage = require("../middleware/uploadImage");
const router = express.Router();
router.post(
  "/createBooking",
  UploadImage.single("img"),
  BookingController.CreateBooking
);
router.get("/readBooking", BookingController.ReadBooking);
router.put(
  "/UpdateBooking/:id",
  UploadImage.single("img"),
  BookingController.UpdateBoking
);
router.delete("/deleteBooking/:id", BookingController.deleteBooking);
router.get("/singleReading/:id", BookingController.ReadSingle);
module.exports = router;
