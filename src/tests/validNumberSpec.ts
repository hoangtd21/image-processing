import { isValidNumber } from '../utils/valid-number';

describe('Test isValidNumber function', () => {
    it('should return correct results', () => {
        expect(isValidNumber('10')).toBe(true);
        expect(isValidNumber('0.5')).toBe(true);
        expect(isValidNumber('200')).toBe(true);
        expect(isValidNumber('200a')).toBe(false);
        expect(isValidNumber('-200')).toBe(false);
    });
});
