export const isValidNumber = (str: string): boolean => {
    return /^\d*\.?\d+$/.test(str) && parseFloat(str) > 0;
};
