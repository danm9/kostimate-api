import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoutes from "./src/routes/userRoutes.js";
import projectRoutes from "./src/routes/projectRoutes.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;
const dbUri =
  process.env.MONGODB_URI ||
  "mongodb+srv://admin:admin@cluster0.ed0ct.mongodb.net/Kostimate";
const corsOrigins = process.env.CORS_ORIGINS || "/./";

// Setup mongoose db
mongoose.Promise = global.Promise;
mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(
  cors({
    Origin: corsOrigins,
  })
);

// Bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Add Routes
userRoutes(app);
projectRoutes(app);

app.get("/", (req, res) =>
  res.send(`Node and express server running on port ${port}`)
);

app.listen(port, () => console.log(`Server is running on port ${port}`));
