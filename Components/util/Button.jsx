import React from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Button({ name, onPress, style, textStyle }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.button, style]}>
        <Text style={[styles.text, textStyle]}>{name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  button: {
    backgroundColor: "blue",
    
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 'bold',
    

  }
});
