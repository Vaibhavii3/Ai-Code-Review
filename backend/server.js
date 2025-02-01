const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { exec } = require("child_process");
const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Report = require("./models/Report");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Configure Multer (for handling file uploads, if needed in future)
const upload = multer({ dest: "uploads/" });

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error(err));

// 🟢 API: Analyze Code
app.post("/analyze", async (req, res) => {
    const { code, language } = req.body;
    if (!code || !language) {
        return res.status(400).json({ error: "Code and language are required" });
    }

    // Create a temporary file for analysis
    const filePath = path.join(__dirname, "temp_code." + (language === "javascript" ? "js" : "py"));
    fs.writeFileSync(filePath, code);

    let command = "";
    if (language === "javascript") {
        command = `npx eslint --format json ${filePath}`;
    } else if (language === "python") {
        command = `pylint --output-format=json ${filePath}`;
    } else {
        fs.unlinkSync(filePath); // Delete temp file
        return res.status(400).json({ error: "Unsupported language" });
    }

    exec(command, async (error, stdout, stderr) => {
        // fs.unlinkSync(filePath); 

        if (error) {
            console.error("Pylint Error:", stderr);
            return res.status(500).json({ error: stderr || "Uknown Pylint error" });
        }

        let analysisResult;
        try {
            analysisResult = JSON.parse(stdout);
        } catch (parseError) {
            console.error("Pylint JSON Parse Error:", stdout);
            return res.status(500).json({ error: "Failed to parse analysis result" });
        }

        // Save the report in MongoDB
        const newReport = new Report({ code, language, analysisResult });
        await newReport.save();

        res.json({ message: "Analysis complete", reportId: newReport._id });
    });
});

// API: Fetch Report by ID
app.get("/reports/:id", async (req, res) => {
    const report = await Report.findById(req.params.id);
    if (!report) {
        return res.status(404).json({ error: "Report not found" });
    }
    res.json(report);
});

// app.get("/check-python", (req, res) => {
//     exec("python --version", (error, stdout, stderr) => {
//         if (error) {
//             console.error("Python Not Found:", stderr);
//             return res.status(500).json({ error: "Python is not installed or not in PATH" });
//         }
//         res.json({ message: `Python Version: ${stdout.trim()}` });
//     });
// });


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
