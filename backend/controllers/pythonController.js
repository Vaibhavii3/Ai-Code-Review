const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
const Report = require("../models/Report");

exports.analyzePython = async (code) => {
    return new Promise((resolve, reject) => {
        // Create temporary file
        const filePath = path.join(__dirname, "../temp.py");
        fs.writeFileSync(filePath, code);

        // run both Pylint and Bandit
        const pylintCommand = `pylint --output-format=json ${filePath}`;
        const banditCommand = `bandit -r ${filePath} -f json`;

        exec(pylintCommand, (pylintError, pylintStdout, pylintStderr) => {
            exec(banditCommand, async (banditError, banditStdout, banditStderr) => {
                fs.unlinkSync(filePath); // Delete temp file

                if (pylintError && !pylintStdout) return reject(pylintStderr || "Pylint Error");
                if (banditError && !banditStdout) return reject(banditStderr || "Bandit Error");

                try {
                    const pylintResults = JSON.parse(pylintStdout || "[]");
                    const banditResults = JSON.parse(banditStdout || "{}").results || [];

                    const analysisResult = [...pylintResults, ...banditResults];

                    const newReport = await new Report({ code, language: "python", analysisResult }).save();
                    resolve({ message: "Analysis complete", reportId: newReport._id });
                } catch (parseError) {
                    reject("Failed to parse analysis output");
                }
            });
        });
    });
};