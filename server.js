const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./Config/db");

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT || 8080;

app.use("/api/v1/test", require("./Routes/testRoutes"));
app.use("/api/v1/auth", require("./Routes/authRoutes"));
app.use("/api/v1/inventory", require("./Routes/inventoryRoutes"));
app.use("/api/v1/analytics", require("./Routes/analyticsRoutes"));
app.use("/api/v1/admin", require("./Routes/adminRoutes"));

app.listen(PORT, (err) => {
  if (err) {
    console.error(`Error starting the server: ${err.message}`.bgRed.white);
  } else {
    console.log(
      `Server running in ${
        process.env.DEV_MODE ? "development" : "production"
      } mode on port ${PORT}`.bgBlue.white
    );
  }
});
