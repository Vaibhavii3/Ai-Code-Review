const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const Report = require("../models/Report");

exports.analyzeJavaScript = async (code) => {
    return new Promise((resolve, reject) => {
        // Create temporary file
        const filePath = path.join(__dirname, "../temp.js");
        fs.writeFileSync(filePath, code);

        const command = `npx eslint --config eslint.config.js --format json ${filePath}`;
        exec(command, async (error, stdout, stderr) => {
            fs.unlinkSync(filePath); // Delete temp file

            if (error) return reject(stderr || "ESLint Error");
            try {
                const analysisResult = JSON.parse(stdout);
                const newReport = await new Report({ code, language: "javascript", analysisResult }).save();
                resolve({ message: "Analysis complete", reportId: newReport._id });
            } catch (parseError) {
                reject("Failed to parse ESLint output");
            }
        });
    });
};
