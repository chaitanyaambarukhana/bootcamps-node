const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan"); //logging third party middleware

const errorHandler = require("./middleware/error"); //error handler middleware

const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });

const bootcamps = require("./routes/bootcamps");
const app = express();

//body parser
app.use(express.json());

connectDB();
//middleware
// const logger = require("./middleware/logger");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

app.use(errorHandler); //this middleware must be used after the routes as above

const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(
//     `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
//   );
// });

const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

//Handle any unhandled promise rejection
process.on("unhandledRejection", (err, promise) => {
  server.close(() => {
    console.log(err.message);
    process.exit(1);
  });
});
