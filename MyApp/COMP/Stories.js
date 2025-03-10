import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

// Fix: Each user should be a separate object within the array
export const USERS = [
  {
    user: 'sugashaw',
    image: 'https://i.imgur.com/dxjd7FB.jpg',
  },
  {
    user: 'jeff',
    image: 'https://i.imgur.com/RTHpWYqb.jpg',
  },
  {
    user: 'james',
    image: 'https://i.imgur.com/MDiACplb.jpg',
  },
  {
    user: 'molly',
    image: 'https://i.imgur.com/BJJjVKzb.jpg',
  },
  {
    user: 'weed101',
    image: 'https://i.imgur.com/YVa7e2Mb.jpg',
  },
  {
    user: 'longusernameexample',
    image: 'https://i.imgur.com/YVa7e2Mb.jpg',
  },
  // Add more user objects if necessary
];

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View key={index} style={{ alignItems: 'center', marginRight: 15 }}>
            <Image
              source={{ uri: story.image }}
              style={styles.story}
            />
            <Text style={styles.username}>
              {
                story.user.length > 11 ? 
                story.user.slice(0, 10).toLowerCase() + '......' : 
                story.user.toLowerCase()
              }
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  story: {
    width: 60, // Set width for each image
    height: 60, // Set height for each image
    borderRadius: 30, // Make it circular
    borderWidth: 3,
    borderColor: '#00B5E2',
  },
  username: {
    color: 'white',
    marginTop: 5, // Add some space between image and name
    textAlign: 'center', // Center the text under the image
    fontSize: 12, // Adjust font size as needed
  },
});

export default Stories;
