import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderScreen = () => {
  return (
    <View>
      <View style={styles.imagebox}>
        <Image
          style={styles.img}
          source={require('../assets/orderimg.jpg')}></Image>
      </View>
      <Text style={styles.text}>Your Order has been Placed</Text>
      <View style={{alignSelf: 'center'}}>
        <MaterialCommunityIcons name="check-circle" size={30} color="green" />
      </View>
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  imagebox: {
    width: 400,
    height: 300,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 18,
    alignSelf: 'center',
    marginVertical: 15,
    color: 'green',
  },
});
