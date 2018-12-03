const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb://gabi:djgaby69@ds123844.mlab.com:23844/web-chat",
  { useMongoClient: true }
);

mongoose.connection
  .once("open", () => console.log("Connected to the database"))
  .on("error", err => console.error(err));
