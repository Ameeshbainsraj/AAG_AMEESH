// /screens/UploadPost.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { firestore, storage } from "../config/firebaseconfig";
import { Ionicons } from "@expo/vector-icons";

const UploadPost = ({ navigation }) => {
  const [media, setMedia] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Pick image/video
  const pickMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setMedia(result.assets[0]);
    }
  };

  // Upload to Firebase
  const uploadPost = async () => {
    if (!media) return;
    setUploading(true);

    const fileExtension = media.uri.split(".").pop();
    const storageRef = storage().ref(`posts/${Date.now()}.${fileExtension}`);

    try {
      // Upload file
      await storageRef.putFile(media.uri);
      const downloadURL = await storageRef.getDownloadURL();

      // Save post details to Firestore
      await firestore().collection("posts").add({
        mediaUrl: downloadURL,
        type: media.type,
        caption: "New Post!",
        timestamp: firestore.FieldValue.serverTimestamp(),
      });

      setUploading(false);
      setMedia(null);
      navigation.navigate("MyFeed");
    } catch (error) {
      console.error("Upload failed:", error);
      setUploading(false);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity onPress={pickMedia}>
        <Ionicons name="image-outline" size={40} color="black" />
        <Text>Select Image/Video</Text>
      </TouchableOpacity>

      {media && (
        <Image source={{ uri: media.uri }} style={{ width: 200, height: 200, marginTop: 10 }} />
      )}

      <TouchableOpacity onPress={uploadPost} disabled={uploading} style={{ marginTop: 20 }}>
        <Text style={{ backgroundColor: "blue", color: "white", padding: 10 }}>
          {uploading ? "Uploading..." : "Upload Post"}
        </Text>
      </TouchableOpacity>

      {uploading && <ActivityIndicator size="large" color="blue" />}
    </View>
  );
};

export default UploadPost;
