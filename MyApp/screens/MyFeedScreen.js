import React from "react";
import { View, Text, SafeAreaView, StyleSheet,ScrollView } from "react-native";
import Header from "../COMP/Header";
import Stories from "../COMP/Stories";
import Post from "../COMP/Posting";
import { POSTS } from "../data/posts";

const MyFeedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.content}>

        <Stories /> {/* Ensure Stories component handles text properly */}

        <ScrollView>


            {POSTS.map((post,index) => (

                <Post Posting={post} key={index}/>
            ))}
          

        </ScrollView>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 1,
    paddingTop: 90,
  },
  content: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
});

export default MyFeedScreen;
