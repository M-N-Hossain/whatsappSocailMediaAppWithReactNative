import React from "react";
import { TextInput, View, StyleSheet, Dimensions } from "react-native";
import IconButton from "../util/IconButton";

export default function MessageInput({
  msgText,
  sendMsgHandler,
  msgTextHandler,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.text}
          value={msgText}
          onChangeText={msgTextHandler}
        />
      </View>
      <View style={styles.iconView}>
        <IconButton
          style={styles.icon}
          icon="arrow-forward-circle-outline"
          onPress={sendMsgHandler}
        />
      </View>
    </View>
  );
}
const deviceWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 8,
    marginLeft: 50,
    borderRadius: 8,
    width: 300,
    marginHorizontal: 10,
    alignItems: "center",
  },
  textInputView: {
    flex: 0.85,
    // marginHorizontal: 10,
  },
  text: {
    height: 30,
    paddingHorizontal: 5,
  },
  iconView: {
    flex: 0.15,
    alignItems: "center",
  },
  icon: {},
});
