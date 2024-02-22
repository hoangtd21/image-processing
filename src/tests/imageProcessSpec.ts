/* eslint-disable @typescript-eslint/no-explicit-any */
import { imageProcess } from '../middlewares/image-process';

describe('imageProcess function', () => {
    it('should not throw an error', async () => {
        const req: any = {
            query: {
                filename: 'test.jpg',
                width: '100',
                height: '100',
            },
        };

        const res: any = {
            status: jasmine
                .createSpy('status')
                .and.returnValue({ send: jasmine.createSpy('send') }),
            set: jasmine.createSpy('set'),
        };

        const next = jasmine.createSpy('next');

        expect(async () => {
            await imageProcess(req, res, next);
        }).not.toThrow();
    });
});
