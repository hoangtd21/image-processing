import express from 'express';
import { imageProcess } from '../../middlewares/image-process';

const images = express.Router();

images.get('/', imageProcess);

export default images;
