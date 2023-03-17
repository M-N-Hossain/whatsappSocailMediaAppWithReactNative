import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { KeyboardAvoidingView, ScrollView } from "react-native";
import { Text, View } from "react-native";
import ImagePick from "../Components/ImagePick";
import Button from "../Components/util/Button";
import { ContactsDetails } from "../dummyData/contactsDetails";

export default function AddContactScreen({ navigation, route }) {
  const [nameText, setNameText] = useState("");
  const [imageUri, setImageUri] = useState("");

  // Getting the id of last saved contact
  let lastSavedContactId = "";
  if (ContactsDetails.length >= 1) {
    lastSavedContactId = ContactsDetails[ContactsDetails.length - 1].id;
  }
  // console.log(lastSavedContactId);

  useEffect(() => {
    if (!route.params) {
      return;
    }
    setImageUri(route.params.uri);
  }, [route]);

  function nameTextHandler(enteredText) {
    setNameText(enteredText);
  }

  function addContactHandler() {
    const idIncrement = ++lastSavedContactId;

    const newContact = {
      id: idIncrement,
      name: nameText,
      imageUrl: imageUri,
      chatHistory: [],
    };

    ContactsDetails.push(newContact);

    navigation.navigate("MainScreen", { newContact: newContact });
  }

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.view}>
          {/* <Text style={styles.nameLabel}>Name</Text> */}
          <TextInput
            style={styles.textInput}
            placeholder="Enter you name"
            value={nameText}
            onChangeText={nameTextHandler}
          />
        </View>
        <View style={styles.view}>
          <ImagePick buttonStyle={styles.label} imageStyle={styles.image} />
        </View>
        <Button
          name="Add"
          style={[styles.label, styles.addButton]}
          textStyle={styles.addButtonText}
          onPress={addContactHandler}
        />
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  view: {
    // backgroundColor: "gray",
    // height: 100,
    width: 300,
    marginHorizontal: 50,
    marginTop: 10,
  },

  label: {
    width: 200,
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "gray",
    borderRadius: 6,
    padding: 5,
    marginBottom: 15,
    marginLeft: 50,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "gray",
    padding: 5,
    fontSize: 15,
    marginBottom: 15,
  },
  image: {
    alignSelf: "center",
  },
  addButton: {
    marginTop: 20,
    marginLeft: 115,
    backgroundColor: "green",
    alignItems: "center",
    width: 160,
  },
  addButtonText: {
    color: "white",
  },
});
