import React, { useEffect, useState } from 'react';

import { SafeAreaView, Text, View, StatusBar, TouchableOpacity } from 'react-native';

import styles from './styles';

const App = () => {

  const [advice, setAdvice] = useState('');
  
  const fetchAPI = () => {
    try {
      const requestAdvice = async () => {
        const req = await fetch('https://api.adviceslip.com/advice');

        const data = await req.json();
        
        setAdvice(data.slip.advice);
        //console.log("fui apertadinho");
      }
      //setAdvice();
      requestAdvice();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <SafeAreaView style = {styles.container}>

      <StatusBar barStyle={(Platform.OS === "ios" ? 'dark-content' : 'light-content')} />

      <View style = {styles.titleContainer}>
        <Text style = {styles.title}>WISDOM OF THE DAY</Text>
      </View>

      <View style = {styles.sentence}>
        <Text style = {styles.text}>{advice}</Text>
      </View>

      <View style = {styles.buttonContainer}>
        <TouchableOpacity style = {styles.button} onPress = {() => {fetchAPI()}}>
          <Text style = {styles.buttonText}>NEW WISDOM</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default App;