import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity, ToastAndroid } from 'react-native';
import { useEffect, useState } from 'react';
import RNShake from 'react-native-shake';

import Torch from 'react-native-torch';

const tamanhoIcone = 150

export default function App() {
  const [interruptor, setInterruptor] = useState(false)

  const handleChangeInterruptor = () => setInterruptor(oldInterruptor => !oldInterruptor);


  useEffect(() => {
    async function torch() {
      if (Platform.OS === 'ios') {
        Torch.switchState(interruptor);
      }
      else {
        const cameraAllowed = await Torch.requestCameraPermission(
          'Camera Permissions', // dialog title
          'We require camera permissions to use the torch on the back of your phone.' // dialog body
        );

        if (cameraAllowed) {
          try {
            Torch.switchState(interruptor);
          }
          catch (e) {
            console.error(e);
            ToastAndroid.show(
              'We seem to have an issue accessing your torch',
              ToastAndroid.SHORT
            );
          }
        }
      }
    }
    torch()
  }, [interruptor])

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      handleChangeInterruptor();
    })

    return () => {
      subscription.remove()
    }
  }, [])

  return (
    <View style={interruptor ? styles.containerBlack : styles.containerLight}>
      <StatusBar style="auto" />
      <View >
        <TouchableOpacity onPress={handleChangeInterruptor}>
          <Image style={interruptor ? styles.iconeOn : styles.iconeOff} source={require('./assets/lamp.png')}></Image>
          <Image source={interruptor ? require('./assets/logoDioBlackTheme.png') : require('./assets/logoDio.png')} style={styles.dioLogo}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBlack: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconeOn: {
    alignSelf: 'center',
    tintColor: 'white',
    width: tamanhoIcone,
    height: tamanhoIcone 
  },
  iconeOff: {
    alignSelf: 'center',
    width: tamanhoIcone,
    height: tamanhoIcone
  },
  dioLogo: {
    resizeMode: 'contain',
    width: tamanhoIcone,
    height: tamanhoIcone
  }
});
