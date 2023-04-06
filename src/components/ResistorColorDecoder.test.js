import { render, fireEvent } from '@testing-library/react-native';
import { colors2Ohms, color2Tolerance } from './ResistorColorDecoder';

describe('bandsDecode function', () => {
    test('returns 560000 for input of green, blue, undefined, yellow', () => {
        const band1 = 'green';
        const band2 = 'blue';
        const band3 = undefined;
        const multiplierBand4 = 'yellow';
        const expected = 560000;
        expect(colors2Ohms(band1, band2, band3, multiplierBand4)).toEqual(expected);
    });

    test('returns 237000000 for input of red, orange, violet, blue', () => {
        const band1 = 'red';
        const band2 = 'orange';
        const band3 = 'violet';
        const multiplierBand4 = 'blue';
        const expected = 237000000;
        expect(colors2Ohms(band1, band2, band3, multiplierBand4)).toEqual(expected);
    });

    test('returns undefined for invalid band colors', () => {
        const band1 = 'purple';
        const band2 = 'pink';
        const band3 = 'white';
        const multiplierBand4 = 'gold';
        expect(colors2Ohms(band1, band2, band3, multiplierBand4)).toBeUndefined();
    });
});



describe('color2Tolerance function', () => {
    test('color2Tolerance should return the correct values', () => {
        expect(color2Tolerance('brown')).toBe(1);
        expect(color2Tolerance('red')).toBe(2);
    });

    test('color2Tolerance should return undefined for invalid input', () => {
        expect(color2Tolerance('purple')).toBe(undefined);
        expect(color2Tolerance('yellow')).toBe(undefined);
    });
});