import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Info } from "../../dummyData/contactsDetails";
import Contact from "./Contact";

export default function ContactList({contactsDetails}) {
  // const contacts = Info.filter((contactDetail) => contactDetail.id >= 0);


  return (
    <View style={styles.body}>
      <FlatList
        data={contactsDetails}
        keyExtractor={(contact) => contact.id}
        renderItem={({ item }) => <Contact name={item.name} id={item.id} imageUrl={item.imageUrl} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginVertical: 25,
    marginHorizontal: 10,
  },
});
