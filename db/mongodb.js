const mongoose = require("mongoose");
const dbConnect = async (url) => {
  return mongoose.connect(url);
};
module.exports = dbConnect;
