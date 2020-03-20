import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

function Page3(props) {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Third Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Page4')}>
        <Text style={styles.buttonText}>Go to 4th Screen</Text>
        
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Page4')}>
      <Text style={styles.buttonText} onPress={()=>navigation.goBack()}>Go to back Screen</Text>
        
      </TouchableOpacity>
     
      
    </View>
  )
}

const styles = StyleSheet.create({
   
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
    backgroundColor: '#222',
    borderRadius: 5,
    padding: 10,
    margin: 20
  },
  buttonText: {
    fontSize: 20,
    color: '#fff'
  }
})

export default Page3