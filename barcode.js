const { createCanvas } = require("canvas");
const JsBarcode = require('jsbarcode');
const fs = require('fs');

async function generateBarcode(value) {
    const canvas = createCanvas();
    JsBarcode(canvas, "value", { 
        // format: "CODE128", // Use CODE_128 format
        lineColor: "black",
        width: 2,
        height: 80,
        displayValue: true // Display the value below the barcode
    });

    let imgBase64 = await new Promise((resolve, reject) => {
        try {
            const dataURL = canvas.toDataURL('image/png');
            resolve(dataURL);
        } catch (err) {
            reject(err);
        }
    });

    console.log(imgBase64);

    // Optionally, save the barcode as an image file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('barcode.png', buffer);
}

// Example usage
const dynamicValue = "1234567890"; // Replace with your dynamic value
generateBarcode(dynamicValue);
