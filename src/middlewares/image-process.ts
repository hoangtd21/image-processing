import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { getFilePath } from '../utils/get-file-path';
import { isValidNumber } from '../utils/valid-number';

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

        if (!isValidNumber(String(width)) || !isValidNumber(String(height))) {
            res.status(400).send('Image size is not valid');
            return;
        }

        const imageFolder = path.resolve(`public/images`);
        const imagePath = getFilePath(imageFolder, filename.toString());
        if (!fs.existsSync(imagePath)) {
            res.status(404).send('Image not found');
            return;
        }

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
