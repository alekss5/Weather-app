import { render, fireEvent, waitFor } from '@testing-library/react-native';
import MainScreen from '../screens/MainScreen';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

const mockNavigation = {
  navigate: jest.fn(),
};

describe('MainScreen component', () => {
  test('initial state', () => {
    const { getByPlaceholderText, getByText } = render(<MainScreen navigation={mockNavigation} />);
    const input = getByPlaceholderText('Enter city name');
    const findButton = getByText('Find');
    
    expect(input.props.value).toBe('');
    expect(findButton.props.disabled).toBeFalsy();
  });

  test('entering city and pressing find button', async () => {
    const { getByPlaceholderText, getByText } = render(<MainScreen navigation={mockNavigation} />);
    const input = getByPlaceholderText('Enter city name');
    const findButton = getByText('Find');
    
    fireEvent.changeText(input, 'New York');
    fireEvent.press(findButton);

    await waitFor(() => {
      expect(mockNavigation.navigate).toHaveBeenCalledWith('WeatherScreen');
    });
  });
});