const mango = require("mongoose");

const BookingSchema = mango.Schema({
  time: { type: Number, required: true },
  people: { type: Number, required: true },
  location: { type: String, required: true },
  qaarada: { type: String, required: true },
  price: { type: Number, required: true },
  qiimadhimis: { type: Number, required: true },
  start: { type: Date, required: true },
  end: { type: Date, required: true },
  Bimage: { type: String, required: true },
});
module.exports = mango.model("Booking", BookingSchema);
