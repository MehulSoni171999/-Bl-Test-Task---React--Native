import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const CheckOutScreen = ({navigation}) => {
  const [productData, setProductData] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart.cart);
  console.log(data, 'cartdata');

  useEffect(() => {
    setProductData(data);
  }, [data]);

  const HandleSubmit = () => {
    navigation.navigate('Order');
  };
  return (
    <View>
      <View style={{width: '100%', height: '100%'}}>
        <FlatList
          keyExtractor={item => item.id}
          data={productData}
          renderItem={({item, index}) => (
            <View style={styles.card}>
              <View style={styles.imagebox}>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.name}>{item.title}</Text>
                <Text style={styles.price}>${item.price * item.quantity}</Text>
                <Text style={styles.description}>
                  {' '}
                  {item.description.length > 30
                    ? item.description.substring(0, 150) + '...'
                    : item.description}{' '}
                </Text>
                <Text>category:- {item.category}</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}></View>
              </View>
            </View>
          )}
        />
        <Text style={styles.order}>
          payment method - cash on the delivery (COD)
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => HandleSubmit()}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CheckOutScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 16,
    paddingHorizontal: 25,
    flexDirection: 'row',
    elevation: 3, // for Android shadow
    shadowColor: '#000', // for iOS shadow
    shadowOpacity: 0.1, // for iOS shadow
    shadowRadius: 10, // for iOS shadow
  },
  imagebox: {
    width: '40%',
    height: 200,
    paddingTop: 15,
  },
  image: {
    width: '100%',
    height: 160,
  },
  detailsContainer: {
    width: '60%',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  button: {
    backgroundColor: 'orange',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    width: 380,
    alignSelf: 'center',
    marginVertical: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: '#888',
    fontWeight: '400',
    marginVertical: 10,
  },
  quantitybox: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  decrementbutton: {
    borderWidth: 1,
    borderColor: 'red',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: 30,
  },
  incrementbutton: {
    borderWidth: 1,
    borderColor: 'green',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    width: 30,
  },
  emptytext: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'grey',
    marginVertical: 325,
  },
  order: {
    fontSize: 18,
    alignSelf: 'center',
    color: 'green',
    marginVertical: 10,
  },
});
