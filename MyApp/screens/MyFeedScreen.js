import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Header from "../COMP/Header";
import Stories from "../COMP/Stories";

const MyFeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Header />

      <Stories /> {/* Add stories here, now properly spaced */}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 90, // Ensure there is space at the top to prevent overlapping
  },
});

export default MyFeedScreen;
