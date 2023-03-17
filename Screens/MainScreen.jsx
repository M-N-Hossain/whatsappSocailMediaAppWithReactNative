import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text } from "react-native";
import { View, StyleSheet } from "react-native";
import ContactList from "../Components/Contact/ContactList";
import Header from "../Components/Header";
import { ContactsDetails } from "../dummyData/contactsDetails";

export default function MainScreen({ navigation, route }) {
  const [contacts, setContacts] = useState([]);
  const [filterContacts, setFilterContacts] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  useEffect(() => {
    setContacts(ContactsDetails);
  }, [contacts]);

  function onChangeTextHandler(enteredText) {
    setEnteredText(enteredText);
    setFilterContacts(
      contacts.filter((contact) => contact.name.includes(enteredText))
    );
  }

  let contactScreen = (contactScreen = (
    <View style={styles.emptyContactView}>
      <Text style={styles.emptyContactText}>
        You do not have any contact 😭
      </Text>
      <Text style={styles.emptyContactText}>Lets add one!!</Text>
    </View>
  ));

  if (contacts.length > 0) {
    if (enteredText.length > 0) {
      contactScreen = <ContactList contactsDetails={filterContacts} />;
    } else {
      contactScreen = <ContactList contactsDetails={contacts} />;
    }
  }

  return (
    <View style={styles.container}>
      <Header enteredText={enteredText} onChangeText={onChangeTextHandler} />
      {contactScreen}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyContactView: {
    marginVertical: 80,
    marginHorizontal: 60,
    alignItems: "center",
  },
  emptyContactText: {
    fontSize: 16,
    marginVertical: 5,
    color: "gray",
  },
});
