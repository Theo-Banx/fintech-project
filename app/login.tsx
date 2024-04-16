import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles'
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const login = () => {

    enum SignInType {
      Phone,
      Email,
      Google,
      Apple
    }

    const [countryCode, setCountryCode] = useState('+49');
    const [phoneNumber, setPhoneNumber] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0 ;

    const onSignIn = async (type : SignInType) =>{
      if(type === SignInType.Phone){

      }

    }
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
    <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome Back</Text>
        <Text style={defaultStyles.descriptionText}>
           Enter the phone number associated with your account
        </Text>

        <View style={[style.inputContainer, {flex:1, }]}>
            <TextInput
                style={style.input}
                placeholder='country Code'
                keyboardType='numeric'
                placeholderTextColor={Colors.gray}
                value= {countryCode}
              
            ></TextInput>
            <TextInput
                style={[style.input, {flex : 1}]}
                placeholder='Mobile number'
                keyboardType='numeric'
                placeholderTextColor={Colors.gray}
                value= {phoneNumber}
                onChangeText={setPhoneNumber}
            ></TextInput>
        </View>


        <Link
        href={"/login"}
        replace asChild
        >
            <TouchableOpacity>
                <Text style={defaultStyles.textLink }>Already have an account</Text>
            </TouchableOpacity>
        </Link>

    <View style={{flex: 1}}>

    </View>
        <TouchableOpacity 
            style={[defaultStyles.pillButton, 
                phoneNumber !==''? style.enabled : style.disabled,
                { marginTop:20}]}
            onPress={()=>onSignIn(SignInType.Phone)}
        >
            <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>


{/* the line */}
        <View style={{flexDirection : 'row', alignItems: 'center', gap:16}}>
              <View
                style={{ flex : 1, height : StyleSheet.hairlineWidth, backgroundColor:Colors.gray}}>
              </View>
              <Text
                style={{ color:Colors.gray, fontSize : 20,}}
              >Or</Text>

          <View
                style={{ flex : 1, height : StyleSheet.hairlineWidth, backgroundColor:Colors.gray}}>
          </View>

        </View>

        <TouchableOpacity
        onPress={()=>onSignIn(SignInType.Google)}
        style ={[
          defaultStyles.pillButton,
          { flexDirection : 'row', gap: 16,
            marginTop: 20,
            backgroundColor: '#fff'
          }
        ]}>
          <Ionicons name='mail'size={24} color={'#000'} />
          <Text style={[defaultStyles.buttonText, {color:'#000'}]} >continue with email</Text>
        </TouchableOpacity>



    </View>
    </KeyboardAvoidingView>
  )
};

const style = StyleSheet.create({

    inputContainer : {
        marginVertical : 40,
        flexDirection : 'row'
    },
    input : {
        backgroundColor: Colors.gray,
        padding : 20,
        borderRadius : 16,
        fontSize : 20,
        marginHorizontal : 10
    },
    enabled :{
        backgroundColor : Colors.primary

    },
    disabled :{
        backgroundColor : Colors.primaryMuted
    }
})

export default login
