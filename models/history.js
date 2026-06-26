import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
    equation: String,
    result: String,
    operationType: String,
    createdAt: Date,
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date,
        default: null
    }
}, { timestamps: true });

const History = mongoose.model("History", historySchema, "calculatorHistory");

export default History;