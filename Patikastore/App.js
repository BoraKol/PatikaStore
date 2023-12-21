import { StyleSheet, View } from 'react-native';

import Product from './src/components/Product';

export default function App() {
  return (
      <View>
         <Product/>
      </View>
       
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
