import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { useState, useCallback, useEffect } from "react";

export default function Message({ contacDetails, msg }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    marginVertical: 8,
    borderRadius: 8,
    width: 300,
    marginHorizontal: 30,
  },
  text: {
    marginHorizontal: 10,
    paddingVertical: 5,
  },
});
