import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { Pressable } from "react-native";
import { View } from "react-native";

export default function Contact({ name, id, imageUrl }) {
  const navigation = useNavigation();

  function selectContactHandler() {
    navigation.navigate("ChatScreen", {
      contactId: id,
    });
  }

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressed}
        onPress={selectContactHandler}
      >
        <View style={styles.innerContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
          <Text style={styles.contactName}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  innerContainer: {
    flexDirection: "row",
    marginVertical: 5,
  },
  pressed: {
    opacity: 0.5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  contactName: {
    marginVertical: 15,
    marginHorizontal: 15,
  },
});
