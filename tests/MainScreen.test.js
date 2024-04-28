import React from 'react';
import { render } from '@testing-library/react-native';
import MainScreen from '../screens/MainScreen';

describe('MainScreen', () => {
  it('render', () => {
    const { getByText, getByPlaceholderText } = render(<MainScreen />);

    expect(getByText('Enter City to see the weather')).toBeTruthy();

    expect(getByPlaceholderText('Enter city name')).toBeTruthy();

    expect(getByText('Use my location')).toBeTruthy();
  });


});
