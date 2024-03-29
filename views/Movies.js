import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { View , Text,TouchableOpacity,StyleSheet} from "react-native";
import { FlatList } from 'react-native-gesture-handler';



// **************************************************************** Main ********************************

export default function Practice ({navigation,route}){
    
    
    // ************************************************* Declarations ******************************************
   
    const [dataa,setData] = useState([])
    const [dataSource,setDataSource] = useState()
    const localStorageKey = "myMovies"
    const baseUrl = 'https://reactnative.dev/movies.json'

    useEffect(() =>{


        // Checking if movies data is in local db

        AsyncStorage.getItem(localStorageKey).then(async (data) => {

            if(data){
                
                let parsedData=JSON.parse(data);
                setData(parsedData)
                setDataSource('Data fetched from Local DB')
            }

            // if data is not in local db , fetching from API and storing it  in local db
            else{
               
              await axios.get(baseUrl).then((response)=>{
                  
                    setData(response.data.movies);
                    setDataSource('Data fetched from API')
                    // Storing data to Local DB
                    AsyncStorage.setItem(localStorageKey,JSON.stringify(response.data.movies))
                    }).catch(err => console.log(err))
            }
}).catch( error => console.log(error))
},[])


    //  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ RETURN() ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    return( 
       
      <View>

       <FlatList
         data={dataa}
         keyExtractor={item=>item.id}
         renderItem={({item })=>(


           <TouchableOpacity  >

             <View style={styles.container}>
             
             <View style={styles.left}>
             <Text style={{color:'red' , fontWeight:'500' , fontSize:15}}>{item.title}</Text>
             </View>

             <View style={styles.middle}>

             <Text >  Relesased in {item.releaseYear} </Text>

             </View>

           

           </View>
           </TouchableOpacity>
   )}/>

       <Text style={{margin:20,alignContent:'center',marginLeft:60,color:'green',fontSize:18,fontWeight:'500'}}> {dataSource}</Text>
     
      </View>

    
)
}

const styles = StyleSheet.create({
    texts: {
        color:'white',
        fontSize:12
    },
    swipeText:{
      color:'white',
      fontSize:5,
    },
    container: {
        backgroundColor:'white', 
    //   marginBottom:10,
      borderBottomWidth:0.5,
      borderBottomColor:'grey',
      height:80, 
      flex:1,
      flexDirection:'row'
      },


      left:{
        flex:0.40, 
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:3,
        // borderWidth:2,
        // borderColor:'red'
      },


    middle : {
        flex:0.60, 
        // backgroundColor:'grey',
        justifyContent:'center',
        
    },
    right : {
        flex:0.25,
        //  backgroundColor:'green',
          alignItems:'flex-end',
          padding:10
        },

   
   
    
});

