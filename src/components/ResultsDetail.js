import React from 'react';
import {View ,Image,Text,StyleSheet} from 'react-native';


const ResultsDetail = ({result}) =>{
    return (
        <View style={styles.contanier} >
            <Image style={styles.imageStyle} source={{uri: result.image_url }} />
            <Text style= {styles.nameStyle} >{result.name}</Text>
            <Text>{result.rating} Stars , {result.review_count} Reviews </Text>
        </View>
    );
};

const styles =StyleSheet.create({
    contanier:{
        marginLeft: 10,
    },
    imageStyle :{
        width:250,
        height: 120,
        borderRadius: 14,
        marginBottom: 7,
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16,

    },

});

export default ResultsDetail; 