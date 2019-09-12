import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Modal
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this._onPress = this._onPress.bind(this);
    this.state = {
      isLoading: true,
      ModalVisible: false,
      TempImageURL: "https://i.pinimg.com/originals/af/41/30/af4130615f3fe2228cce052130ab0280.jpg"
    };
  }
  webCall = () => {
    return fetch("https://reactnativecode.000webhostapp.com/FlowersList.php")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson,
          }
          /*function() {
            // In this block you can do something with new state.
          }*/
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.webCall();
  }
  _onPress(moda,imgUrl){
    
    this.setState({
      ModalVisible: moda,
      TempImageURL: imgUrl
    });
    //console.log(this.state.TempImageURL);
  }
  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Modal
          transparent={false}
          visible={this.state.ModalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <Image source={{ uri: this.state.TempImageURL }} style={{flex:1}} />
        </Modal>

        <View>
          <Text style={styles.textView}>ESPAÇO PARA OS MENUS SUPERIORES</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View style={{ flex: 1, marginRight: 3 }}>
              <TouchableOpacity
                onPress={() => this._onPress(true,item.flower_image_url)}
              >
                <Image
                  source={{ uri: item.flower_image_url }}
                  style={styles.imageView}
                />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
        />
        <View>
          <Text style={styles.textView}>ESPAÇO PARA OS MENUS INFERIORES</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: "center",
    flex: 1,
    margin: 5,
    marginTop: Platform.OS === "ios" ? 20 : 0
  },
  container: {
    justifyContent: "center",
    flex: 1,
    paddingTop: 30
  },

  imageView: {
    /*width: "50%",
    height: 100,*/
    justifyContent: "center",
    alignItems: "center",
    height: 100,
    width: "100%",
    margin: 3
  },
  ima: {
    flex: 1
  },

  textView: {
    width: "100%",
    textAlign: "center",
    color: "#000",
    marginBottom: 2
  }
});
