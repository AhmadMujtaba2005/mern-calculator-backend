import History from "../models/history.js";

// Helper: format a Date object into readable string e.g. "30 Jun 2026, 06:10:35 PM"
const formatDate = (date) => {
    if (!date) return null;
    return new Date(date).toLocaleString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });
};

// Format all date fields in a document
const formatDoc = (doc) => ({
    ...doc,
    createdAt: formatDate(doc.createdAt),
    updatedAt: formatDate(doc.updatedAt),
    deletedAt: formatDate(doc.deletedAt),
});

// GET all history - including soft deleted (Postman)
const getHistory = async (req, res) => {
    try {
        const history = await History.find().sort({ createdAt: -1 }).lean();
        res.json(history.map(formatDoc));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// GET only active history - isDeleted: false (Frontend)
const getActiveHistory = async (req, res) => {
    try {
        const history = await History.find({ isDeleted: false }).sort({ createdAt: -1 }).lean();
        res.json(history.map(formatDoc));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Save history
const saveCalculation = async (req, res) => {
    const { equation, result, operationType } = req.body;

    try {
        const history = new History({
            equation,
            result,
            operationType
        });

        await history.save();
        res.status(201).json(formatDoc(history.toObject()));
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Soft delete - sets isDeleted: true, does NOT remove from DB
const deleteHistory = async (req, res) => {
    try {
        const updated = await History.findByIdAndUpdate(
            req.params.id,
            { isDeleted: true, deletedAt: new Date() },
            { returnDocument: 'after' }
        ).lean();

        if (!updated) {
            return res.status(404).json({ message: "Record not found" });
        }

        res.json({ message: "History soft deleted successfully", data: formatDoc(updated) });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getHistory, getActiveHistory, saveCalculation, deleteHistory }