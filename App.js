import React, { Component, useState, useRef} from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import Timer from './components/Timer'
import Svg, { Circle } from 'react-native-svg'




export default function App() {
  const [timer, setTimer] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [isPaused, setIsPaused] =useState(false)
  const increment = useRef(null)
  
  
  const handleStart = () =>{
    setIsRunning(true)
    setIsPaused(false)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }
  
  const handlePause = () =>{
    clearInterval(increment.current)
    setIsPaused(true)
    
  }
  
  const handleResume = () =>{
    setIsPaused(false)
    increment.current = setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)
  }
  
  const handleReset = () =>{
    clearInterval(increment.current)
    setIsRunning(false)
    setIsPaused(false)
    setTimer(0)
  }
  return (
    <View style={styles.container}>
      <Text>React StopWatch</Text>
      <StatusBar style="auto" />
      <Text>{timer}</Text>
        <Button onPress={handleStart} title="Start"/>
          {isRunning ? <Button onPress={handlePause} title="Stop"/> : <Button onPress={handleResume} title="Resume"/>}

        
          <Button onPress={handleReset} title="Reset"/>
           
      
      <Svg height="50%" width="50%" viewBox="0 0 100 100" >
        <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
      </Svg>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
