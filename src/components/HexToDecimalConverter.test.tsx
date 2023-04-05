import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HexToDecimalConverter from './HexToDecimalConverter';

describe('HexToDecimalConverter', () => {
  it('converts valid hexadecimal input to decimal', () => {
    const { getByTestId, getByText } = render(<HexToDecimalConverter />);
    const hexInput = getByTestId('hex-input');
    const decInput = getByTestId('dec-input');

    fireEvent.changeText(hexInput, '1A');
    expect(decInput.props.value).toBe('26');

    fireEvent.changeText(hexInput, 'FF');
    expect(decInput.props.value).toBe('255');
  });

  it('ignores invalid hexadecimal input', () => {
    const { getByTestId, getByText } = render(<HexToDecimalConverter />);
    const hexInput = getByTestId('hex-input');
    const decInput = getByTestId('dec-input');

    fireEvent.changeText(hexInput, '?');
    expect(decInput.props.value).toBe('Invalid Input.');

    fireEvent.changeText(hexInput, 'G');
    expect(decInput.props.value).toBe('Invalid Input.');

    fireEvent.changeText(hexInput, '1G');
    expect(decInput.props.value).toBe('Invalid Input.');
  });
});
