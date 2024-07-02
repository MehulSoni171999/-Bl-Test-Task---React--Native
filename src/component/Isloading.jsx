import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';

const Isloading = ({isloading}) => {
  return (
    <Modal transparent={true} visible={isloading}>
      <View style={styles.loading}>
        <ActivityIndicator size={50} color={'orange'}></ActivityIndicator>
      </View>
    </Modal>
  );
};

export default Isloading;

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },
});
