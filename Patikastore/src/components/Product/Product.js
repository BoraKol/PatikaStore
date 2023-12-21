import React from 'react';

import { View , Text ,TextInput, FlatList , Image } from 'react-native';

import styles from "./ProductStyle";

import product_data from "/src/product_data.json";

const Product = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>PATIKASTORE</Text>
            <TextInput style={styles.input} placeholder='Ara...'/>
            <FlatList data={product_data}
             numColumns={2}
             renderItem={({item}) => (
             
                <View style={styles.card_style}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={{ uri: item.imgURL }}/>   
                    <Text style={{fontWeight:"bold"}}>{item.title}</Text> 
                    <Text>{item.price}</Text>            
                </View>              
     ) } />
        </View>
    );
}

export default Product;