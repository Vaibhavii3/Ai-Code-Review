const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { analyzeJavaScript } = require("./controllers/javascriptController");
const { analyzePython } = require("./controllers/pythonController");
const Report = require("./models/Report");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));


// API: Analyze Code
app.post("/analyze", async (req, res) => {
    const { code, language } = req.body;
    if (!code || !language) return res.status(400).json({ error: "Code and language are required" });

    try {
        if (language === "javascript") {
            return res.json(await analyzeJavaScript(code));
        } else if (language === "python") {
            return res.json(await analyzePython(code));
        } else {
            return res.status(400).json({ error: "Unsupported language" });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
});

// 🟢 API: Fetch Report by ID
app.get("/reports/:id", async (req, res) => {
    const report = await Report.findById(req.params.id);
    if (!report) return res.status(404).json({ error: "Report not found" });
    res.json(report);
});



// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
