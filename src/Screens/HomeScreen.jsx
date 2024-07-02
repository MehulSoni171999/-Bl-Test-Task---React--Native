import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Product from '../component/Product';
import {useDispatch} from 'react-redux';
import {fetchProductApi} from '../redux/Features/ApiComponent';
import {addToCart} from '../redux/Slice/CartSlice';
import Isloading from '../component/Isloading';

const HomeScreen = () => {
  const [productData, setProductData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductApi()).then(data => {
      console.log(data);
      if (data) {
        const res = data.payload;

        try {
          console.log(res, '5955965852851');
          setProductData(res);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }, []);

  const handlerSubmit = item => {
    dispatch(addToCart(item));
  };

  return (
    <View>
      <View style={{width: '100%', height: '100%'}}>
        {productData && productData.length > 0 ? (
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
                  <Text style={styles.price}>${item.price}</Text>
                  <Text style={styles.description}>
                    {' '}
                    {item.description.length > 30
                      ? item.description.substring(0, 100) + '...'
                      : item.description}{' '}
                  </Text>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => handlerSubmit(item)}>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        ) : (
          <Isloading Isloading={Isloading} />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

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
    backgroundColor: '#03bafc',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#888',
    fontWeight: '400',
    marginVertical: 10,
  },
});
