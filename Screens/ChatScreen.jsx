import React, { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, KeyboardAvoidingView, StyleSheet, View } from "react-native";
import Message from "../Components/Chat/Message";
import MessageInput from "../Components/Chat/MessageInput";
import { ContactsDetails } from "../dummyData/contactsDetails";

export default function ChatScreen({ navigation, route }) {
  // Getting the contact id through params as I sent the id with navigation from Main Screen
  const contactId = route.params.contactId;

  // Find the specific contact with id
  const contacDetails = ContactsDetails.find(
    (contacDetails) => contacDetails.id === contactId
  );

  // Getting previous messages of that specific contaact
  let prevMsg = contacDetails.chatHistory;

  let prevLastMsgId = 0;

  if (contacDetails.chatHistory.length > 0) {
    prevLastMsgId =
      contacDetails.chatHistory[contacDetails.chatHistory.length - 1].id;
  }

  const [messages, setMessages] = useState([]);
  const [msgText, setMsgTet] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: contacDetails.name,
    });
    setMessages(prevMsg.map((msg) => msg.chat));
  }, [navigation, contactId]);

  useEffect(() => {}, [sendMsgHandler]);

  function msgTextHandler(enteredText) {
    setMsgTet(enteredText);
  }
  function sendMsgHandler() {
    id = ++prevLastMsgId;
    chat = msgText;
    const newMsg = { id: id, chat: chat };

    // add new msg to chatHistory
    contacDetails.chatHistory.push(newMsg);

    setMessages([...messages, newMsg.chat]);
    setMsgTet("");
  }
  console.log(messages);

  const MsgFlatList = () => {
    return (
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Message msg={item} />}
      />
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.messageView}>
          <MsgFlatList />
        </View>

        <View style={styles.messageInputView}>
          <MessageInput
            msgText={msgText}
            msgTextHandler={msgTextHandler}
            sendMsgHandler={sendMsgHandler}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  container: {
    flex: 1,
  },
  messageView: {
    flex: 0.8,
  },

  messageInputView: {
    // flex: 0.1,
  },
});
