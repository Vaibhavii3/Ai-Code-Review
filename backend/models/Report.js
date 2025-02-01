const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    code: String,
    language: String,
    analysisResult: Object,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Report", ReportSchema);
