
import { render, fireEvent } from '@testing-library/react-native';
import CustomInput from '../components/CustomInput';

describe('CustomInput', () => {
  test('renders correctly with default props', () => {
    const { getByPlaceholderText, getByText } = render(
      <CustomInput placeholder="Enter text..." buttonText="Button" />
    );
    expect(getByPlaceholderText('Enter text...')).toBeTruthy();
    expect(getByText('Button')).toBeTruthy();
  });

  test('calls handleChange when text is entered', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText } = render(
      <CustomInput
        placeholder="Enter text..."
        handleChange={handleChange}
        buttonText="Button"
      />
    );
    const input = getByPlaceholderText('Enter text...');
    fireEvent.changeText(input, 'test input');
    expect(handleChange).toHaveBeenCalledWith('test input');
  });

  test('calls handleButtonPress when button is pressed', () => {
    const handleButtonPress = jest.fn();
    const { getByText } = render(
      <CustomInput buttonText="Button" handleButtonPress={handleButtonPress} />
    );
    const button = getByText('Button');
    fireEvent.press(button);
    expect(handleButtonPress).toHaveBeenCalledTimes(1);
  });
});
