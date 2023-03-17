import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import MainScreen from "./Screens/MainScreen";
import ChatScreen from "./Screens/ChatScreen";
import IconButton from "./Components/util/IconButton";
import AddContactScreen from "./Screens/AddContactScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={({ navigation }) => ({
            headerTitle: "WhatsApp",
            headerBackTitle: "Edit",
            headerRight: () => (
              <IconButton
                icon="person-add-outline"
                onPress={() => {
                  navigation.navigate("Add Contact");
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="Add Contact" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
