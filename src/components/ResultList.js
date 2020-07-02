import React from 'react';
import {
    Text ,
    View ,
    StyleSheet ,
    FlatList ,
    TouchableOpacity
} from 'react-native';
import ResultsDetail from '../components/ResultsDetail';
import {withNavigation} from 'react-navigation'

const ResultList = ({title , results , navigation})=> {
    if(!results.length){
        return null;
    }

    return (
        <View style={styles.contaniner} >
            <Text style={styles.titleStyle} >{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result)=> result.id}
                renderItem={({item}) =>{
                return (
                    <TouchableOpacity onPress={()=>navigation.navigate('Result', {id : item.id})} > 
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                    
                    
                );
                }}
            />

        </View>

    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight : 'bold',
        marginLeft : 10,
    },
    contaniner:{
        marginBottom: 10,
    }
});

export default withNavigation(ResultList); 