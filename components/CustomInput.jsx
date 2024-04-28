import { StyleSheet, TextInput, Button, View } from "react-native";

export default function CustomInput({
  style,
  value,
  handleChange,
  handleButtonPress,
  placeholder,
  buttonText,
  isButtonDisabled,
}) {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.input}
        onChangeText={handleChange}
        value={value}
        placeholder={placeholder}
      />
      <Button
        title={buttonText}
        onPress={handleButtonPress}
        disabled={isButtonDisabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    borderRadius: 5,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 18,
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});
