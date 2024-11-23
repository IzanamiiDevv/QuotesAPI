const fs = require("fs");
const path = require("path");

const quotesFilePath = "resources/quotes.txt";
const outputDir = "API";
const outputFilePath = path.join(outputDir, "quote.txt");

fs.readFile(quotesFilePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading the quotes file:", err);
        return;
    }

    const quotes = data.split("\n").filter(line => line.trim());
    const random = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[random];

    fs.mkdir(outputDir, { recursive: true }, (mkdirErr) => {
        if (mkdirErr) {
            console.error("Error creating the output directory:", mkdirErr);
            return;
        }

        fs.writeFile(outputFilePath, randomQuote, "utf8", (writeErr) => {
            if (writeErr) {
                console.error("Error writing the quote file:", writeErr);
            } else {
                console.log("Random quote saved successfully:", randomQuote);
            }
        });
    });
});
