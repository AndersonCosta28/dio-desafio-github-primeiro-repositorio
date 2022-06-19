import React from "react"
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Image, Pressable, Linking } from "react-native"
import Dio from "./src/Dio"

const colorHeaderGitHub = '#161B22'
const colorBodyGitHub = '#010409'
const colorFontCinzaGitHub = '#8b949e'
const colorFontClaraGitHub = '#c9d1d9'

const urlToyGitHub = 'https://github.com/Mert1s';

const handlePressGoToGitHub = async () => {
  console.log('Verificando o link!')
  const res = await Linking.canOpenURL(urlToyGitHub);
  if (res) {
    console.log('Link Aprovado!')
    
    await Linking.openURL(urlToyGitHub)
    console.log('Abrindo o link!')
  }

}

const fotoDePerfil = { height: 200, width: 200, uri: "https://avatars.githubusercontent.com/u/70107407?v=4" }


const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorHeaderGitHub} barStyle="light-content"></StatusBar>
      <View style={style.content}>
        <Image style={style.avatar} source={fotoDePerfil} accessibilityLabel="Foto de Anderson" />
        <Text style={[style.defaultText, style.titulo]} accessibilityLabel="Nome Anderson Costa">Anderson Costa</Text>
        <Text style={[style.defaultText, style.subTitulo]} accessibilityLabel="Subtitulo Mert1s">Mert1s</Text>
        <Text style={[style.defaultText, style.descricao]} accessibilityLabel="Descricao Fullstack developer JavaScript | HTML | CSS | SQL.">Fullstack developer JavaScript | HTML | CSS | SQL.</Text>
        <Text style={[style.defaultText, style.descricao]} accessibilityLabel="Descricao Stacks: React.js | ReactNative | Node.js | PostgreSQL | Nest.js">Stacks: React.js | ReactNative | Node.js | PostgreSQL | Nest.js</Text>
        <Dio/>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.botao}>
            <Text style={[style.defaultText, style.descricao]}>Ir para o GitHub</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorBodyGitHub,
    flex: 1,
    justifyContent: "center"
  },
  content: {
    alignItems: 'center',
    padding: 20

  },
  defaultText: {
    color: 'white',
    fontWeight: 'bold',
    color: colorFontClaraGitHub,
    margin: 2
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 20,
    color: colorFontCinzaGitHub
  },
  descricao: {
    fontSize: 16,
    textAlign: 'justify',
    width: '100%'
  },
  avatar: {
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 30
  },
  botao: {
    marginTop: 20,
    backgroundColor: colorFontCinzaGitHub,
    borderRadius: 10,
    padding: 20
  }
})