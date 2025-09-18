const BookingModel = require("../Models/BookingModel");

const CreateBooking = async (req, res) => {
  const { time, people, location, qaarada, price, qiimadhimis, start, end } =
    req.body;
  const NewBooking = BookingModel({
    time,
    people,
    location,
    qaarada,
    price,
    qiimadhimis,
    start,
    end,
    Bimage: req.file.filename,
  });
  const SaveBooking = await NewBooking.save();
  if (NewBooking) {
    res.send(SaveBooking);
  }
};

const ReadBooking = async (req, res) => {
  const NewReadBooking = await BookingModel.find();
  if (NewReadBooking) {
    res.send(NewReadBooking);
  }
};

const UpdateBoking = async (req, res) => {
  const { time, people, location, qaarada, price, qiimadhimis, start, end } =
    req.body;
  const NewUpdate = await BookingModel.updateOne(
    { _id: req.params.id },
    {
      $set: {
        time,
        people,
        location,
        qaarada,
        price,
        qiimadhimis,
        start,
        end,
        Bimage: req.file ? req.file.filename : undefined,
      },
    }
  );
  if (NewUpdate) {
    res.send("Sucess Update");
  }
};

const deleteBooking = async (req, res) => {
  const NewDelete = await BookingModel.deleteOne({ _id: req.params.id });
  if (NewDelete) {
    res.send("Sucess Delete");
  }
};

const ReadSingle = async (req, res) => {
  const DataSingle = await BookingModel.findById(req.params.id);
  if (DataSingle) {
    res.send(DataSingle);
  }
};
module.exports = {
  CreateBooking,
  ReadBooking,
  UpdateBoking,
  deleteBooking,
  ReadSingle,
};
