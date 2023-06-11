import React from 'react';
import CustomTextComponent from './src/CustomTextComponent';
import { SafeAreaView, View,Text, TextComponent} from 'react-native';
const Deneme = () => {
const onChange=(text)=>{


}


return(<View style={{paddingTop:150,backgroundColor:'grey',flex:1}}>

 
  
<CustomTextComponent  title={"Ad:"} onChange={onChange} type={"default"}/>
<CustomTextComponent title={"Soyad:"} onChange={onChange} type={"default"}/>
<CustomTextComponent title={"Numara:"} onChange={onChange} type={"phone-pad"}/>
<CustomTextComponent title={"E-mail:"} onChange={onChange} type={"email-adres"}/>


</View>)
}


/*const Deneme = () => {
  return (
    <View>
      <Text>Profil Bilgileri
      </Text>
    </View>
  );
};*/

export default Deneme;