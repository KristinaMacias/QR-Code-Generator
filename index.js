import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs' 


let question = [
    {
        type: 'input',
        name: 'URL',
        message: 'Enter a URL to generate a QR code',
    },
  ]

inquirer
  .prompt(question) // pass a prompt to the user
  .then((answers) => { // wait for their answer
    const url = answers.URL;
    
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      throw error 
    } else {
      // Something else went wrong
      console.log('something else went wrong.')
    }
  });

