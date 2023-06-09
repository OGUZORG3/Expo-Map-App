import { StyleSheet, Text, View,Image, SafeAreaView, ScrollView }
 from 'react-native';
import{createAppContainer} from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { startTransition } from 'react';
import { StyleSheet, Text, View } from 'react-native';



class App extends React.Component{

   render(){
  return (
    <SafeAreaView>  
      <ScrollView>
      <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
          <Text>Git</Text>

</TouchableOpacity>
     
      
    <View style={{paddingTop:150,height:150,backgroundColor:'black'}} /> 
    <View style={{paddingTop:150,height:150,backgroundColor:'red'}} /> 
    <View style={{paddingTop:150,height:150,backgroundColor:'green'}} /> 
    <View style={{paddingTop:150,height:150,backgroundColor:'pink'}} /> 
    <View style={{paddingTop:150,height:150,backgroundColor:'blue'}} /> 
    <View style={{paddingTop:150,height:150,backgroundColor:'white'}} /> 
    <View style={{paddingTop:150,height:150,backgroundColor:'red'}} /> 
     
    </ScrollView>
    </SafeAreaView>
    
    
  );
}
}
class Detail extends React.Component{

  render(){
 return (
   <SafeAreaView>  
     <ScrollView>

   <View style={{paddingTop:150,height:150,backgroundColor:'black'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'red'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'green'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'pink'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'blue'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'white'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'red'}} /> 
    
   </ScrollView>
   </SafeAreaView>
   
   
 );
}
}
class Drawer extends React.Component{

  render(){
 return (
   <SafeAreaView>  
     <ScrollView>

   <View style={{paddingTop:150,height:150,backgroundColor:'black'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'red'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'green'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'pink'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'blue'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'white'}} /> 
   <View style={{paddingTop:150,height:150,backgroundColor:'red'}} /> 
    
   </ScrollView>
   </SafeAreaView>
   
   
 );
}
}
const HomeStack = createStackNavigator({
  Home:{
    screen:App
  }
});

const DetailStack = createStackNavigator({
  Detail:{
    screen: Detail
  }
});
const DrawerStack = createStackNavigator({
  Drawer:{
    screen: Drawer
  }
});




const AppNavigator = createDrawerNavigator({
Home: {
  screen:HomeStack
},
Detail: {screen:DetailStack},
Drawer:{
  screen:DrawerStack
}
},{
  contentComponent:Drawer
});


export default createAppContainer(AppNavigator);





