import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import React from 'react';
import LogIN from './src/Screens/LogIN';
import SignUp from './src/Screens/SignUp';
import HomeScreen from './src/Screens/HomeScreen';
import CartScreen from './src/Screens/CartScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import {Provider} from 'react-redux';
import {store} from './src/redux/store/store';
import CheckOutScreen from './src/Screens/CheckOutScreen';
import OrderScreen from './src/Screens/OrderScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#03bafc',

        tabBarLabelPosition: 'below-icon',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <Icon name="shoppingcart" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle="light-content"
        animated={true}
        backgroundColor="#03bafc"
      />

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={SignUp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LogIN}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeTab"
            component={HomeTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ChackOut"
            component={CheckOutScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Order"
            component={OrderScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
