import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles'
import { Link } from 'expo-router';
import { useState } from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';

const signup = () => {
    const [countryCode, setCountryCode] = useState('+49');
    const [phoneNumber, setPhoneNumber] = useState('');
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 80 : 0 ;

    const onSignup = async () =>{

    }
  return (
    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={keyboardVerticalOffset}>
    <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Lets get started</Text>
        <Text style={defaultStyles.descriptionText}>
            Enter your phone number . We will send you a confirmation code there
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
            onPress={onSignup}
        >
            <Text style={defaultStyles.buttonText}>Sign up</Text>
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

export default signup
