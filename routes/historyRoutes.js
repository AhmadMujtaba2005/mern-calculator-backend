import express from "express";
import { getHistory, getActiveHistory, saveCalculation, deleteHistory } from "../controllers/historyController.js";

const router = express.Router();

router.get("/", getHistory);           // Postman: ALL records including soft-deleted
router.get("/active", getActiveHistory); // Frontend: only isDeleted: false
router.post("/", saveCalculation);
router.delete("/:id", deleteHistory);  // Soft delete

export default router;