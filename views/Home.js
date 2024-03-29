import { StyleSheet,Text,View,TouchableOpacity,  } from 'react-native';

export default function Home({navigation,route}) {
  
  const onFetchMovies = () => {

    navigation.navigate('Movies');

  }

  return (
    <View style={styles.container}>

      <Text style={{fontSize:14,color:'black',alignSelf:'center',margin:50}}> 
      Fetching Data of movies from local db. If not present then fetching from Api and then storing in local db for future fetching. 
      </Text>

      <TouchableOpacity onPress={onFetchMovies} style={styles.button}>
            <View>
                  <Text style={{ color:'white'}}> Fetch Movies </Text>
            </View>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor:'lightblue', 
    padding:5,
    margin:50,
    alignSelf:'center'
  }
})