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
        <FlatList
          data={this.state.dataSource}
          ItemSeparatorComponent={this.FlatListItemSeparator}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: "row" }}>
              <Image
                source={{ uri: item.flower_image_url }}
                style={styles.imageView}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
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
    flex: 1
  },

  imageView: {
    width: "50%",
    height: 100,
    margin: 7,
    borderRadius: 7
  },

  textView: {
    width: "50%",
    textAlignVertical: "center",
    padding: 10,
    color: "#000"
  }
});
