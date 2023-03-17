import React, { useState, useEffect } from "react";
import { Image, View, Platform, Text, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Button from "./util/Button";
import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export default function ImagePick({ buttonStyle, imageStyle }) {
  const navigation = useNavigation();

  // For gallery permisson
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);

  // For asking gallery permission
  useEffect(() => {
    (async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  // for pick the the iamges from gallery
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);

    //   Sending attribute from child component to parent componet
    // https://reactnavigation.org/docs/navigation-actions/#navigate - have a look
      navigation.dispatch(
        CommonActions.navigate({
          name: "Add Contact",
          params: {
            uri: result.assets[0].uri,
          },
        })
      );
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to gallery</Text>;
  }

  let showImage = (
    <View style={[styles.image, imageStyle]}>
      <Text>No image picked yet</Text>
    </View>
  );

  if (image) {
    showImage = (
      <Image style={[styles.image, imageStyle]} source={{ uri: image }} />
    );
  }

  return (
    <View>
      {showImage}
      <Button name="Select Image" style={buttonStyle} onPress={pickImage} />
      
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
  },
});
