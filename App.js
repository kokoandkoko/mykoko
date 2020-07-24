import React from 'react';
import {Text,View,StyleSheet, Linking,Image} from 'react-native';
export default function App(){
  return(
    <View style= {styles.container}>
      <Text style = {styles.myContent} onPress={() => Linking.openURL('https://www.youtube.com/')}>
        #youtube
      </Text>
      <Text style = {styles.myContent} onPress={() => Linking.openURL('https://discord.com/login?redirect_to=%2Fchannels%2F%40me')}>
        #discord
      </Text>
      <Text style = {styles.myContent} onPress={() => Linking.openURL('https://www.google.co.th/?hl=th')}>
        #google
      </Text>
      <Image
      source={{uri:'https://media.giphy.com/media/ChCgHHOUW3G7u/giphy.gif',}}
      style={{width:200, height:200}}
    />
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
  flex : 1 ,
      justifyContent :'center',
      alignItems : 'center',
      backgroundColor:'deepskyblue',
  },
myContent:{
  fontSize:20,
  color:'white',
}
}
)
