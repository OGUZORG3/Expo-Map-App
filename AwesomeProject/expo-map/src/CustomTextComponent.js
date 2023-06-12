import React from 'react';
import { Text, TextBase, TextInput, View,  } from 'react-native';



export default function CustomTextComponent({title,onChange,type})

{
 
 
   
   
   

    return(<View> 
 
        <Text style={{color:'black',fontSize:20,}}>{title}
 
      
        </Text>
        
        
       


       
        <TextInput 
        

         style={{borderWidth:4,borderColor:"red",borderRadius:10,margin:10,fontSize:15,}}
        keyboardType={type} onChangeText={(text)=>onChange(text)}
        />
        

        
        

       

    </View>)
    
    
    
}


