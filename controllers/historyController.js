import History from "../models/history.js";

// Get all history
const getHistory = async (req, res) => {
    try {
        const history = await History.find();
        res.json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Save history
const saveCalculation = async (req, res) => {
    const { equation, result, operationType } = req.body;

    try {
        const history = new History({
            equation,
            result,
            operationType
        });

        await history.save();
        res.status(201).json(history);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Delete history
const deleteHistory = async (req, res) => {
    try {
        await History.findByIdAndUpdate(req.params.id, { isDeleted: true, deletedAt: new Date() });
        res.json({ message: "History deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getHistory, saveCalculation, deleteHistory }