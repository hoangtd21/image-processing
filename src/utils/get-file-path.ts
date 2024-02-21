import path from 'path';
import fs from 'fs';

export const getFilePath = (imageFolder: string, filename: string) => {
    let filePath = '';
    const files = fs.readdirSync(imageFolder);
    for (const file of files) {
        const imageName = file.split('.')[0];
        const imageType = file.split('.')[1];
        if (filename === imageName) {
            filePath = path.join(imageFolder, `${imageName}.${imageType}`);
        }
    }
    return filePath;
};
