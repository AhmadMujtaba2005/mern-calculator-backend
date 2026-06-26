import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import connectDB from "./config/db.js";
import historyRoutes from "./routes/historyRoutes.js";

dotenv.config();

const app = express();

// Middleware
// app.use(cors());
// app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
app.get("/", (req, res) => {
    res.send("Calculator API Running...");
});


app.use("/api/history", historyRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
