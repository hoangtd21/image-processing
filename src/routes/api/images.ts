import express from 'express';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
import { getFilePath } from '../../utils/get-file-path';

const images = express.Router();

images.get('/', async (req, res) => {
    try {
        const { filename, width, height } = req.query;

        if (!filename || !width || !height) {
            return res.status(400).send('Missing some properties');
        }

        const imageFolder = path.resolve(`public/images`);
        if (!fs.existsSync(imageFolder)) {
            return res.status(404).send('Image folder not found');
        }
        const imagePath = getFilePath(imageFolder, filename.toString());

        const resizedImage = await sharp(imagePath)
            .resize(Number(width), Number(height))
            .jpeg({ mozjpeg: true })
            .toBuffer();

        res.set('Content-Type', 'image/jpeg');
        return res.status(200).send(resizedImage);
    } catch (error) {
        return res.status(500).send('Server error');
    }
});

export default images;
