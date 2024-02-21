import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native';

export default function App() {
  
  const onLogIn = () => {
    console.log("You clicked the login button");
  }
  return (
    <View style={styles.container}>

      <View style={styles.topcontainer}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/logo3.jpg')}
      />
      </View>
      
      <View style={styles.midcontainer}>

       <View style={styles.fieldcont}>

        <Image
        style={styles.fieldsLogo}
        source={require('./assets/usericon.png')}
        />
        <TextInput placeholder='Username' style={styles.inputfields}>
        {/* <FontAwesomeIcon icon="fa-regular fa-user" size="2xs" style={{color: "#545463",}} /> */}
        </TextInput>
        </View>
       <View style={styles.fieldcont}>

        <Image
        style={styles.fieldsLogo}
        source={require('./assets/2.png')}
        />
        <TextInput placeholder='Password' style={styles.inputfields}>
        {/* <FontAwesomeIcon icon="fa-regular fa-user" size="2xs" style={{color: "#545463",}} /> */}
        </TextInput>
        </View>

       

        <TouchableOpacity style={styles.button} onPress={onLogIn}>
        <Text style={{color: 'rgb(84, 84, 99)', fontSize: 16}}>LogIn</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.bottomcontainer}>
          <Text style={{color: 'rgb(84, 84, 99)', fontSize: 16}}> Don't have an account? Sign up</Text>
      </View>
      <StatusBar style="auto" />
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
  topcontainer:{
    flex:0.30,
    // backgroundColor:'green',
    alignItems: 'center',
    justifyContent:'flex-end'
  },

  midcontainer:{
    flex:0.50,
    // backgroundColor:'blue',
    alignItems: 'center',
    justifyContent:'center'
  },
  bottomcontainer:{
    flex:0.20,
    // backgroundColor:'red',  
    alignItems: 'center',
    justifyContent:'center'
  },
  tinyLogo:{
    height:150,
    width:150,
    backgroundColor:'white',
    borderColor:'white'
  },
  fieldsLogo:{
    height:20,
    width:20,
    // backgroundColor:'white',
    // borderColor:'white'
  },
  fieldcont:{
    // flex:1,
    borderColor:'red',
    flexDirection:'row',
    alignItems:'baseline'
  },
  inputfields:{
    width:220,
    height:40,
    margin:10,
    color:'gray',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:'gray'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    // margin:10,
    marginTop:20,
    width:230,
    height:40,
    borderRadius:20
  },
});
