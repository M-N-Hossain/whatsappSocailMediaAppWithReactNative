import React from "react";
import { StyleSheet } from "react-native";
import { Text, TextInput, View } from "react-native";

export default function Header({ enteredText, onChangeText }) {
  return (
    <View>
      <Text style={styles.title}>Chats</Text>
      <TextInput
        style={styles.searchInput}
        value={enteredText}
        placeholder="Search"
        onChangeText={onChangeText}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginLeft: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  searchInput: {
    width: 350,
    height: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
});
