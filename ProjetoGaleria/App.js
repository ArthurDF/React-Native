import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={[{ key: "a" }, { key: "b" }]}
        renderItem={({ item }) => <Text>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
