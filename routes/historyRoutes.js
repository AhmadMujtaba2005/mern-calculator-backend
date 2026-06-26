import express from "express";
import { getHistory, saveCalculation, deleteHistory } from "../controllers/historyController.js";

const router = express.Router();

router.get("/", getHistory);
router.post("/", saveCalculation);
router.delete("/:id", deleteHistory);

export default router;