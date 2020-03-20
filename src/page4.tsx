import React,{Component} from 'react'
import { StyleSheet, View, Text, TouchableOpacity ,BackHandler} from 'react-native'
// export default class Page4 extends Component(props:any){
  import { useFocusEffect } from '@react-navigation/native';



  function Page4(props:any) {

  useFocusEffect(
    React.useCallback(() => {
      const handleBackPress = () => {
        const { navigation } = props;
        navigation.navigate('Page1')
        return true
      };

      BackHandler.addEventListener('hardwareBackPress', handleBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }, [])
  );



    // componentDidMount() {
    //     BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    // }
    
    // componentWillUnmount(){
    //     BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    // }
    
    // handleBackPress = () => {
    //     const { navigation } = this.props
    //     navigation.navigate('Page1')
    //     return true;
    // };
  



    return (
      <View style={styles.container}>
        <Text style={styles.text}>Fourth Screen</Text>
      
      </View>
    )


   
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

export default Page4