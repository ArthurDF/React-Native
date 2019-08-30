import React, { Component } from 'react';
import { Text, View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import Ima from 'Component/Ima';

//<Ima></Ima>

//<Ima name="arthur" ></Ima>


/* criamos um componente aqui embaixo com um prop, podemos utilizalo dentro do nosso 
componente mestre ou seja o Lots of Greetings*/

/*
class Greeting extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}
class Fafi extends Component {
  render() {
    let pic = {
      uri: 'https://imgshare.io/images/2019/07/23/index171aaf0afb451513.jpg'
    };
    return (
      <View>
        <Image source={pic} style={{width: 184, height: 330}}/>
      </View>
    );
  }

}
export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', top: 50}}>
        <Greeting name='Fabçu' />
        <Greeting name='Jaelçu' />
        <Fafi> </Fafi>
        <Greeting name='Juans' />
      </View>
    );
  }
}*/
/*
class Ima extends Component {
  render(){
    let pic = {
      uri: this.prompt.nome
    };
    return(
      <View style={{alignItems: 'center', top: 50}}>
        <Image source={pic} style={{width: 184, height: 330}}/>
      </View>
    );
  }
}

export default class Mrmeeseks extends Component{
  render(){
    return(
    <View style={{alignItems: 'center', top: 50}}>
      <Text>oioioioio</Text>
      
      <Ima nome="https://imgshare.io/images/2019/07/23/index171aaf0afb451513.jp"></Ima>
    </View>
    );
  }
}*/
/*
class Ima extends Component {
  render(){
    let pic = {
      uri: 'https://vignette.wikia.nocookie.net/rickandmorty/images/6/6c/MeeseeksHQ.png/revision/latest?cb=20150930232412'
    };
    let bic = {
      uri: 'https://images-na.ssl-images-amazon.com/images/I/51V8wlJpBxL._SX466_.jpg'
    };

    return(
      <View style={{alignItems: 'center', top: 50}}>
        <Image source={pic} style={{width: 184, height: 330}}/>
      </View>
    );
  }
}*/

export default class Mrmeeseks extends Component{
  constructor(props) {
    super(props)
    this.state= {
      uri: 'https://images-na.ssl-images-amazon.com/images/I/51V8wlJpBxL._SX466_.jpg',
      te: "Aperte a caixa",
      ura: 'https://images-na.ssl-images-amazon.com/images/I/51V8wlJpBxL._SX466_.jpg',
      state: 0
    }
  }
  onPress = () => {
    if (this.state.state==0)
      this.setState({
          uri:'https://vignette.wikia.nocookie.net/rickandmorty/images/6/6c/MeeseeksHQ.png/revision/latest?cb=20150930232412',
          te: "I'm Mr.Meeseks Look At Me",
          state: 1      
      })
    else {
      this.setState({
        uri:'https://images-na.ssl-images-amazon.com/images/I/51V8wlJpBxL._SX466_.jpg',
        te: "Existance is Pain",
        state: 0  
      })
    }
  }
  render(){
    return( 
      <View style={{alignItems: 'center', top: 50}}>  
        <TouchableOpacity
          onPress={this.onPress}
        >
          <Text> {this.state.te} </Text>
          <Image source={this.state} style={{width: 184, height: 330}}/>
          
        </TouchableOpacity>
      </View>
    );
  }
}
