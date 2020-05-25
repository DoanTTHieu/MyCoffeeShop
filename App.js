import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Auth from './src/components/Auth/Auth';
//import OrdersHistory from './src/components/Menu/OrdersHistory';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Auth/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
