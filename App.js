import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Home from './screens/Home'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const getFonts = ()  => Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf")
})


const App = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if(fontsLoaded){
    return (
      <>
       <Home />
      </>
     )
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=>setFontsLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }
  
}

export default App

const styles = StyleSheet.create({})