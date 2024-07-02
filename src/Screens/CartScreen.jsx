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
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../redux/Slice/CartSlice';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CartScreen = ({navigation}) => {
  const [productData, setProductData] = useState([]);
  const [price, setPrice] = useState();
  const dispatch = useDispatch();
  const data = useSelector(state => state.cart.cart);
  console.log(data, 'cartdata');

  useEffect(() => {
    setProductData(data);
    const total = () => {
      let price = 0;
      data.map(elem => {
        price = elem.price * elem.quantity + price;
      });
      setPrice(price);
    };
    total();
  }, [data]);

  const handlerDecrement = item => {
    dispatch(decrementQuantity(item));
  };

  const handlerIncrement = item => {
    dispatch(incrementQuantity(item));
  };

  const handleRemove = item => {
    dispatch(removeFromCart(item));
  };

  const HandleSubmit = price => {
    if (productData.length > 0) {
      navigation.navigate('ChackOut');
    }
  };
  return (
    <View>
      <View style={{width: '100%', height: '100%'}}>
        {productData.length > 0 ? (
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
                  <Text style={styles.price}>
                    ${item.price * item.quantity}
                  </Text>
                  <Text style={styles.description}>
                    {' '}
                    {item.description.length > 30
                      ? item.description.substring(0, 100) + '...'
                      : item.description}{' '}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.quantitybox}>
                      <TouchableOpacity
                        style={styles.decrementbutton}
                        onPress={() => handlerDecrement(item)}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <Text style={{color: '#03bafc', fontSize: 18}}>
                        {item.quantity}
                      </Text>
                      <TouchableOpacity
                        style={styles.incrementbutton}
                        onPress={() => handlerIncrement(item)}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                      style={{marginTop: 5}}
                      onPress={() => handleRemove(item)}>
                      <MaterialCommunityIcons
                        name="delete-outline"
                        size={30}
                        color="red"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        ) : (
          <Text style={styles.emptytext}>Your Cart is Empty !</Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={() => HandleSubmit(price)}>
          <Text style={styles.buttonText}>CheckOut</Text>
          <Text style={styles.buttonText} item={price}>
            Total : ${price}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

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
    marginVertical: 10,
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
});
