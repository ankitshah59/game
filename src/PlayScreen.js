import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,Button, Image} from 'react-native';
const rock = require('./signs/rock.png');
const scissors = require('./signs/scissors.png');
const paper = require('./signs/paper.png');

const bgColors = ['#3498db','#f1c40f','#c0392b']; 

const randomImg = () => {
    const emojis = [rock,paper,scissors]
    const random = Math.floor(Math.random()*3)
   // console.log(random);
    return emojis[random];
}


const PlayScreen = ()=> {
    const [counter,setCounter] = useState(3)
    useEffect(()=>{
       // console.log(counter);

        if(counter === 0){
            return;
        }

        const timer = setTimeout(() =>{
            setCounter((prv) => prv -1)
        },500);

        return () =>{
            clearTimeout(timer)
        };
    },[counter]);
    
  return (
    <View style={StyleSheet.compose(
        {backgroundColor: bgColors[counter-1]},
         styles.container
         )}>
      
     {(counter < 1) ? (
         <>
         <Image style = {styles.sign} source = {randomImg()} />
         <View style = {styles.button}>
         <Button onPress={()=>setCounter(3)} title = "Play Again"/>
         </View>
         </>
     ) : <Text style = {styles.counter}>{counter}</Text>}
      
      </View>
   
  
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    counter:{
      fontSize: 150,
      color: "white",
      marginBottom:10
    },
    button:{
      position: "absolute",
      bottom: 40,
    },
    sign:{
        width:250,
        height: 250,
    }
  
  });

export default PlayScreen;