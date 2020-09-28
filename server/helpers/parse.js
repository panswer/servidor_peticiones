const path = require('path');
const fs = require('fs');

class Parse {
    static toFileBase64InFolder(nameFile) {
        let folderPath = path.resolve(__dirname, '../../files');

        if (fs.existsSync(folderPath)) {
            let filePath = path.join(folderPath, nameFile);
            if (nameFile && fs.existsSync(filePath)) {
                let base64 = fs.readFileSync(filePath, { encoding: 'base64' });
                let folderBase64 = folderPath + 'Base64';
                if (fs.writeFileSync(folderBase64)) {
                    let newName = nameFile.split('.')[0] + '.txt';
                } else {
                    console.log(`Error in folder:${folderBase64}`);
                }
            } else {
                console.log(`Error in file:${nameFile}`);
            }
        } else {
            console.log(`Error in folder ${folderPath}`);
        }

    }
}

module.exports = Parse