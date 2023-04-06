export const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white', 'gold', 'silver'];

//bands 1,2
const color2Digit = (color) => {
    if (!colors.includes(color)) {
        return undefined; // input is not in the array
    }

    if (color === 'gold' || color === 'silver') {
        return undefined; // illegal value for gold and silver
    }

    return colors.indexOf(color);
}

//band 3
const color2Multiplier = (color) => {
    if (!colors.includes(color)) {
        return undefined; // input is not in the array
    }

    if (color === 'gold') {
        return 0.1;
    }
    else if (color === 'silver') {
        return 0.01;
    } else {
        return 10 ** colors.indexOf(color);
    }
}

//band 4 -- in percentage
export const color2Tolerance = (color) => {
    if (!colors.includes(color)) {
        return undefined; // input is not in the array
    }

    switch (color) {
        case 'brown':
            return 1;
        case 'red':
            return 2;
        case 'green':
            return 0.5;
        case 'blue':
            return 0.25;
        case 'violet':
            return 0.1;
        case 'grey':
            return 0.05;
        case 'gold':
            return 5;
        case 'silver':
            return 10;
        default:
            return undefined;
    }
}

//band3 is optional.
export const colors2Ohms = (band1, band2, band3, multiplierBand4) => {
    const digit1 = color2Digit(band1);
    const digit2 = color2Digit(band2);
    const digit3 = color2Digit(band3);
    const multiplier = color2Multiplier(multiplierBand4);

    if (digit1 === undefined || digit2 === undefined || multiplier === undefined) {
        return undefined
    }

    let digitsAppended;
    if (band3 !== undefined) {
        digitsAppended = digit1.toString() + digit2.toString() + digit3.toString();
    } else {
        digitsAppended = digit1.toString() + digit2.toString();
    }

    return parseFloat(digitsAppended) * multiplier;
}


