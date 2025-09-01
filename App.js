import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  
  const[input, setInput] = useState('')
  const[result, setResult] = useState('')
  const[end, setEnd] = useState(Boolean)

  useEffect(() => {
    try{
      if(input){
        setResult(eval(input).toString())
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
      setEnd(false)
    }else if(key != '='){
      setInput((prev) => prev+key)
    }else{
      setEnd(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={[styles.keyText, {fontSize:50}]}>
          {input}
        </Text>
        <Text style={[styles.keyText,{fontSize:50}, end == true ? styles.resultText : null]}>
          {result}
        </Text>
      </View>

      <View style={styles.buttons}>
        
        <View style={styles.buttonRow}>
          <Pressable style={styles.keys} onPress={() => press('1')}>
            <Text style={styles.keyText}>
              1
            </Text>
          </Pressable>
          <Pressable style={styles.keys} onPress={() => press('2')}>
            <Text style={styles.keyText}>
              2
            </Text>
          </Pressable>
          <Pressable style={styles.keys} onPress={() => press('3')}>
            <Text style={styles.keyText}>
              3
            </Text>
          </Pressable>
          <Pressable style={[styles.keys, styles.specialKeys]} onPress={() => press('+')}>
            <Text style={styles.keyText}>
              +
            </Text>
          </Pressable>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.keys} onPress={() => press('4')}>
            <Text style={styles.keyText}>
              4
            </Text>
          </Pressable>
          <Pressable style={styles.keys} onPress={() => press('5')}>
            <Text style={styles.keyText}>
              5
            </Text>
          </Pressable>
          <Pressable style={styles.keys} onPress={() => press('6')}>
            <Text style={styles.keyText}>
              6
            </Text>
          </Pressable>
          <Pressable style={[styles.keys, styles.specialKeys]} onPress={() => press('-')}>
            <Text style={styles.keyText}>
              -
            </Text>
          </Pressable>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={styles.keys} onPress={() => press('7')}>
            <Text style={styles.keyText}>
              7
            </Text>
          </Pressable>
          <Pressable style={styles.keys} onPress={() => press('8')}>
            <Text style={styles.keyText}>
              8
            </Text>
          </Pressable>
          <Pressable style={styles.keys} onPress={() => press('9')}>
            <Text style={styles.keyText}>
              9
            </Text>
          </Pressable>
          <Pressable style={[styles.keys, styles.specialKeys]} onPress={() => press('*')}>
            <Text style={styles.keyText}>
              *
            </Text>
          </Pressable>
        </View>
        <View style={styles.buttonRow}>
          <Pressable style={[styles.keys, styles.specialKeys]} onPress={() => press('C')}>
            <Text style={styles.keyText}>
              C
            </Text>
          </Pressable>
          <Pressable style={styles.keys} onPress={() => press('0')}>
            <Text style={styles.keyText}>
              0
            </Text>
          </Pressable>
          <Pressable style={[styles.keys, styles.specialKeys]} onPress={() => press('=')}>
            <Text style={styles.keyText}>
              =
            </Text>
          </Pressable>
          <Pressable style={[styles.keys, styles.specialKeys]} onPress={() => press('/')}>
            <Text style={styles.keyText}>
              /
            </Text>
          </Pressable>
        </View>
        
        <StatusBar style="auto" />
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#000033',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  result:{
    backgroundColor: '#333366',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    width: '95%',
    height: '20%',
    borderWidth: 5,
    borderColor: '#aaaadd',
    borderRadius: 20,
    justifyContent: 'center',
    padding: 10
  },
  resultText:{
    color: '#fff',
    fontWeight: 700,
    fontSize: 70,
  },
  buttons:{
    backgroundColor: '#555588',
    fontSize: 40,
    color: '#fff',
    alignItems: 'center',
    width: '95%',
    height: '70%',
    borderWidth: 10,
    borderColor: '#aaaadd',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: 20
  },
  buttonRow:{
    width: '100%',
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  keys:{
    backgroundColor: '#11005555',
    width: '25%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#aaaadd',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  keyText:{
    color: '#fff',
    fontSize: 90,
  },
  specialKeys:{
    backgroundColor: '#00553355'
  }
});
