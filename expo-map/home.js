import React from 'react';
import {SafeAreaView, Text,ScrollView,TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex:1,width:'100%',alignItems: 'center'}}>
            <ScrollView style={{flex: 1, width: '100%'}}>
      <TouchableOpacity 
      onPress={() => navigation.navigate('deneme')}
      style={{
        margin:10,
       flex:1 ,
       width:'95%',
       height:300, 
       alignItems:'center',
       backgroundColor:'beige',
       justifyContent:'center',
       borderRadius: 30,
       }}>
        <Text style={{color:'black', fontSize:21}}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity 
      onPress={() => navigation.navigate('map')}
      style={{
        margin:10,
       flex:1 ,
       width:'95%',
       height:400, 
       alignItems:'center',
       backgroundColor:'beige',
       justifyContent:'center',
       borderRadius: 50,
       }}>
        <Text style={{color:'black', fontSize:21}}>Map</Text>
        </TouchableOpacity>
      </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;