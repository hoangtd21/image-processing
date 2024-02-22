import fs from 'fs';
import { getFilePath } from '../utils/get-file-path';

describe('Test getFilePath function', () => {
    it('should return an empty string if filename is not found', () => {
        const imageFolder = 'public/images`';
        const filename = 'testImage';

        spyOn(fs, 'readdirSync').and.returnValue([]);
        const result = getFilePath(imageFolder, filename);
        expect(result).toBe('');
    });

    it('should return an empty string if imageFolder is empty', () => {
        const imageFolder = 'public/images';
        const filename = 'testImage';

        spyOn(fs, 'readdirSync').and.returnValue([]);
        const result = getFilePath(imageFolder, filename);
        expect(result).toBe('');
    });
});
