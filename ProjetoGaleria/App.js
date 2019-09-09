import React, { Component } from "react";
import {
  StyleSheet,
  Platform,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  Image,
  Alert,
  YellowBox
} from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }
  webCall = () => {
    return fetch("https://reactnativecode.000webhostapp.com/FlowersList.php")
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson
          },
          function() {
            // In this block you can do something with new state.
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.webCall();
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
        <View>
          <Text style={styles.textView}>ESPAÇO PARA OS MENUS SUPERIORES</Text>
        </View>
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View style={{ flex: 1,marginRight:3}}>
              <Image
                source={{ uri: item.flower_image_url }}
                style={styles.imageView}
              />
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
    marginTop: Platform.OS === "ios" ? 20 : 0,
    
  },
  container: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 30,
  },

  imageView: {
    /*width: "50%",
    height: 100,*/
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: "100%",
    margin:3,
    
  },

  textView: {
    width: "100%",
    textAlign: "center",
    color: "#000",
    marginBottom:2
  }
});
