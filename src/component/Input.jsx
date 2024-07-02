import {StyleSheet, Text, View, TextInput, name} from 'react-native';
import React from 'react';

const Input = ({
  title,
  placeholder,
  keyboard,
  is_password,
  value,
  onChangeText,
}) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="gray"
        style={styles.inputText}
        secureTextEntry={is_password}
        keyboardType={keyboard}
        value={value}
        onChangeText={onChangeText}
        name={name}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputText: {
    borderBottomColor: '#03bafc',
    borderBottomWidth: 1,
    paddingVertical: 0,
    marginTop: 5,
    color: 'black',
  },
  title: {
    fontSize: 16,
    color: '#03bafc',
  },
});
