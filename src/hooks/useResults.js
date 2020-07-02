import {useEffect , useState} from 'react';
import yelp from '../api/yelp';


export default () => {

    const [results , setResults] = useState([]);
    const [errorMsg , setErrorMsg] = useState('');


    const searchApi = async (searchTerm) => {
        console.log('api called!!');
        try{
            const respponse = await yelp.get('/search', {
                params:{
                    limit:50,
                    term : searchTerm,
                    location: 'san jose'

                }
            });
      setResults(respponse.data.businesses);
    }catch(e){
        setErrorMsg('Something went wrong');
    }
    };

    useEffect(()=>{
        searchApi('cake');
    }, [])
 
    return [searchApi , results ,errorMsg];

};