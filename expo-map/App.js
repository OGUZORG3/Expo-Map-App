
import React from 'react';
import { SafeAreaView, View,Text, TextComponent} from 'react-native';
import CustomTextComponent from './src/CustomTextComponent';
import Routes from './routes';

const App = () => {
  return <Routes />;
}








  const onChange=(text)=>{


  }


/*return(<View style={{paddingTop:250,backgroundColor:'grey',flex:1}}>

   
    
<CustomTextComponent  title={"Ad:"} onChange={onChange} type={"default"}/>
<CustomTextComponent title={"Soyad:"} onChange={onChange} type={"default"}/>
<CustomTextComponent title={"Numara:"} onChange={onChange} type={"phone-pad"}/>
<CustomTextComponent title={"E-mail:"} onChange={onChange} type={"email-adres"}/>


</View>)*/





export default App

