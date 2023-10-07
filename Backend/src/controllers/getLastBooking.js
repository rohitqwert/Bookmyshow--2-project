const bookingModel = require("../model/schema");

const getLastBooking = async (req, res) => {
  bookingModel
    .findOne({})
    .sort({ bookedAt: -1 })
    .then((lastEntry) => {
      if (lastEntry) {
        res.status(200).json(lastEntry);
      } else {
        res.status(404).json({ message: "No previous booking found." });
      }
    })
    .catch((err) => {
      res.status(500).json({
        message: "An unexpected error occurred. please try again later.",
      });
    });
};

module.exports = getLastBooking;
