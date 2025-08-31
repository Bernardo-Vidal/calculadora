import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const[input, setInput] = useState('')
  const[result, setResult] = useState('')

  useEffect(() => {
    try{
      if(input){
        const final = eval(input)
        setResult(final.toString())
      }else{
        setResult('')
      }
    }catch(e){
      setResult('')
    }
  }, [input])

  const press = (key) =>{
    if(key == 'C'){
      setInput('')
      setResult('')
    }else if(key != '='){
      setInput((prev) => prev+key)
    }
  }

  return (
    <View style={{flex:1}}>
      <View style={[styles.container, {flex:2,backgroundColor: '#ffff22'}]}>
        <Text>
          {input}
        </Text>
        <Text>
          {result}
        </Text>
      </View>

      <View style={[styles.container, {flex:3}]}>
        <Pressable onPress={() => press('C')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            C
          </Text>
        </Pressable>
        <Pressable onPress={() => press('1')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            1
          </Text>
        </Pressable>
        <Pressable onPress={() => press('2')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            2
          </Text>
        </Pressable>
        <Pressable onPress={() => press('3')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            3
          </Text>
        </Pressable>
        <Pressable onPress={() => press('4')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            4
          </Text>
        </Pressable>
        <Pressable onPresss={() => press('6')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            5
          </Text>
        </Pressable>
        <Pressable onPress={() => press('7')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            6
          </Text>
        </Pressable>
        <Pressable onPress={() => press('8')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            7
          </Text>
        </Pressable>
        <Pressable onPress={() => press('9')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            8
          </Text>
        </Pressable>
        <Pressable onPress={() => press('0')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            9
          </Text>
        </Pressable>
        <Pressable onPress={() => press('-')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            0
          </Text>
        </Pressable>
        <Pressable onPress={() => press('+')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            +
          </Text>
        </Pressable>
        <Pressable onPress={() => press('/')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            -
          </Text>
        </Pressable>
        <Pressable onPress={() => press('*')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            /
          </Text>
        </Pressable>
        <Pressable onPress={() => press('=')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            *
          </Text>
        </Pressable>
        <Pressable onPress={() => press('5')}>
          <Text styles={{padding: 200, backgroundColor:'#b00b69'}}>
            =
          </Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  button:{
    backgroundColor: '#b00b69',
    padding: 20,
  },
  answer:{
    backgroundColor: '#ff0000ff',
    color: '#ffffff', 
    width: 200,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
