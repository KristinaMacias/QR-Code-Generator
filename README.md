# QR-Code-Generator
This Node.js script generates a QR code image based on user input, utilizing the `inquirer` and `qr-image` packages.

## Usage

1. **Clone this repository** to your local machine.
2. **Navigate** to the directory containing the script.
3. **Install dependencies** using "npm install":
4. **Run in Terminal** using "node index.js"
5. **Input a Web URL** when prompted by the terminal
6. **Open the qr_img.png** in the file director and scan with your phone

## Note 
Ensure that Node.js is installed on your system before running the script.
Generated QR code images will be saved as qr_img.png in the directory where the script is run.

## Dependencies
inquirer: A collection of common interactive command line user interfaces.
qr-image: A module to generate QR codes in Node.js.

## Example
$ node index.js
? Enter a URL to generate a QR code https://example.com

