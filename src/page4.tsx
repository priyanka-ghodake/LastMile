import React,{Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity ,BackHandler} from 'react-native'
export default class Page4 extends Component (){
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    
    handleBackPress = () => {
        const { navigation } = this.props
        navigation.navigate('Page1')
        return true;
    }
    render() {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Screen</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Page3')}>
        <Text style={styles.buttonText}>Go to 1st Screen</Text>
        
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.buttonText1}>
      <Text style={styles.buttonText1} onPress={()=>navigation.goBack()}>Go to 1st Screen</Text>
      </TouchableOpacity> */}
    </View>
  )
    }
}

const styles = StyleSheet.create({
    buttonText1:{
        fontSize: 20,
    color: 'red',
    marginTop:50
    },
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

// export default Page4