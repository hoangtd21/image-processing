import express from 'express';
import sharp from 'sharp';
import path from 'path';

const images = express.Router();

images.get('/', async (req, res) => {
  try {
    const { filename, width, height } = req.query;

    if (!filename || !width || !height) {
      return res.status(400).send('Missing some properties');
    }

    const imagePath = `public/images/${filename}.gif`;
    const resizedImage = await sharp(path.resolve(imagePath))
      .resize(Number(width), Number(height))
      .jpeg({ mozjpeg: true })
      .toBuffer();

    res.set('Content-Type', 'image/jpeg');
    return res.send(resizedImage);
  } catch (error) {
    return res.status(500).send('Server error');
  }
});

export default images;
