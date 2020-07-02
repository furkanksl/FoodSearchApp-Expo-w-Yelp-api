import React , {useState , useEffect} from 'react';
import {View , Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearhBar'
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const SearchScreen = () =>{
    const [term , setTerm] = useState('');
    const [searchApi, results , errorMsg] = useResults();
    
    const filterResultsByPrice = (price) => {
        return results.filter(result =>{
            return result.price == price;
        });
    };

    return (
        <View style={{flex:1 , backgroundColor: 'silver'}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={()=> searchApi(term)}
                />
            
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>
                <ResultList 
                    results={filterResultsByPrice('$')} 
                    title ="Cost Effective" 
                    
                    />
                <ResultList 
                    results={filterResultsByPrice('$$')} 
                    title ="Bit Pricier"
                    
                    />
                <ResultList 
                    results={filterResultsByPrice('$$$')} 
                    title ="Big Spender"
                    
                    />         
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;