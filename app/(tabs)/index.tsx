
import { StyleSheet, View, Text, Touchable} from 'react-native';
import {useAssets} from 'expo-asset';
import { ResizeMode, Video } from 'expo-av';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Link } from 'expo-router';'

const Page = () =>{
  const [assets] = useAssets([require('@/assets/fonts/spaceMono-Regular.ttf')]);
  return (
    <View style={styles.container}>
        <Text>Page</Text>
        {assets  &&(<Video 
        resizeMode={ResizeMode.COVER}
        isMuted
        isLooping
        shouldPlay

        source={{uri:assets[0].uri}}  style={styles.video}/>)}
        <View style={{marginTop: 80, padding: 20}}>
          <Text style={{fontSize:20}}>Welcome to the app</Text>
        </View>

        <View style={styles.buttons}>
          <Link href="/login" asChild>
          <TouchableOpacity>
                <Text>Login</Text>
          </TouchableOpacity>
          </Link>

        </View>
    </View>
  );
}

const styles  = StyleSheet.create({
    container : {
      flex : 1,
      justifyContent:'center',

    },
    video :{
      width:300,
       height:200,
       position : 'absolute'
    },
    header :{
      fontSize: 36,
      fontWeight: '900',
      textTransform : 'uppercase',
      color : 'white'
    },
    buttons : {
      flexDirection: 'row',
      justifyContent : 'center',
      gap : 20,
      paddingHorizontal : 20  

    }

})


export default Page;



 
