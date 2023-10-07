const bookingModel = require("../model/schema");
const postBooking = async (req, res) => {
  try {
    const booking = await bookingModel.create(req.body);
    if (!booking) {
      return res
        .status(422)
        .json({ message: "Failed to create booking.Please try again later." });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);

    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid booking data. please provide valid details.",
      });
    }

    res.status(500).json({
      message: "An unexpected error occurred . please try again later.",
    });
  }
};

module.exports = postBooking;
