import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { getFilePath } from '../utils/get-file-path';

export const imageProcess = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    try {
        const { filename, width, height } = req.query;

        if (!filename || !width || !height) {
            res.status(400).send('Missing some properties');
            return;
        }

        const imageFolder = path.resolve(`public/images`);
        if (!fs.existsSync(imageFolder)) {
            res.status(404).send('Image folder not found');
            return;
        }
        const imagePath = getFilePath(imageFolder, filename.toString());

        const resizedImage = await sharp(imagePath)
            .resize(Number(width), Number(height))
            .jpeg({ mozjpeg: true })
            .toBuffer();

        res.set('Content-Type', 'image/jpeg');
        res.status(200).send(resizedImage);
        next();
    } catch (error) {
        res.status(500).send('Server error');
        return;
    }
};
