import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../component/Input';

const SignUp = ({navigation}) => {
  const InitialValues = {
    UserName: '',
    Email: '',
    PhoneNo: '',
    password: '',
  };

  const [formValues, setFormValues] = useState(InitialValues);
  const [formErrors, setFormErrors] = useState({});
  const [data, setData] = useState('');
  const handleChange = (name, text) => {
    setFormValues({...formValues, [name]: text});
    console.log(formValues, '********************');
    // const {value} = event.target;
    // console.log(name);

    // try {
    //   const jasonValue = JSON.stringify(formValues);
    //   AsyncStorage.setItem('formvalues', jasonValue);
    //   console.log('Data successfully saved', jasonValue, '000000000000');
    // } catch (err) {
    //   console.log(err);
    // }

    // console.log(formValues);
    // setFormErrors(validate(formValues));
  };

  const handleSubmit = () => {
    const errors = validate(formValues);

    try {
      setData(formValues);

      const jasonValue = JSON.stringify(data);
      //   AsyncStorage.setItem('formvalues', jasonValue);
      AsyncStorage.setItem('formvalues', jasonValue);
      console.log('Data successfully saved', jasonValue, '000000000000');
    } catch (err) {
      console.log(err);
    }

    if (Object.keys(errors).length === 0) {
      console.log(formValues);
      navigation.navigate('Login');
    } else {
      setFormErrors(errors);
    }
  };

  const validate = values => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //username
    if (!values.UserName) {
      errors.UserName = 'UserName is required !';
    }

    //Email
    if (!values.Email) {
      errors.Email = 'Email is required !';
    } else if (!emailRegex.test(values.Email)) {
      errors.Email = 'Please enter valid email format !';
    }

    //PhoneNo
    if (!values.PhoneNo) {
      errors.PhoneNo = 'Contact no. is required !';
    }

    if (!values.password) {
      errors.password = 'password is required !';
    }
    return errors;
  };

  return (
    <>
      <View style={styles.Container}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Register</Text>
          <Input
            title="Username"
            placeholder="Enter username"
            keyboard="default"
            value={formValues.UserName}
            name={'Username'}
            onChangeText={text => handleChange('UserName', text)}
          />
          {formErrors && (
            <Text style={styles.error}>{formErrors.UserName}</Text>
          )}
          <Input
            title="Email"
            placeholder="abc123@gmail.com"
            keyboard="email-address"
            value={formValues.Email}
            name={'Email'}
            onChangeText={text => handleChange('Email', text)}
          />
          {formErrors && <Text style={styles.error}>{formErrors.Email}</Text>}
          <Input
            title="Contact Number"
            placeholder="8569******"
            keyboard="number-pad"
            value={formValues.PhoneNo}
            onChangeText={text => handleChange('PhoneNo', text)}
            name={'PhoneNo'}
          />
          {formErrors && <Text style={styles.error}>{formErrors.PhoneNo}</Text>}
          <Input
            title="Password"
            placeholder="********"
            keyboard="default"
            is_password={true}
            value={formValues.password}
            onChangeText={text => handleChange('password', text)}
            name={'password'}
          />
          {formErrors && (
            <Text style={styles.error}>{formErrors.password}</Text>
          )}

          <TouchableOpacity style={styles.btntab} onPress={handleSubmit}>
            <Text style={styles.text}>Next</Text>
          </TouchableOpacity>

          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.linetext}>
            Already have an account?
            <Text onPress={() => navigation.navigate('Login')}>Login</Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    elevation: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#03bafc',
    textAlign: 'center',
  },
  forgottext: {
    color: '#03bafc',
    fontSize: 16,
    textAlign: 'right',
  },
  linetext: {
    color: '#03bafc',
    fontSize: 16,
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
  btntab: {
    width: 100,
    height: 40,
    color: '#FFFFFF',
    backgroundColor: '#03bafc',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  text: {
    color: '#FFFFFF',
  },
  error: {
    fontSize: 10,
    color: 'red',
  },
});
