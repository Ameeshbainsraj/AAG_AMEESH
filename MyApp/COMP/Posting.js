import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from 'react-native-elements';



//POST FOOTER ICONS
const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like.png',
    likedImageUrl: 'https://img.icons8.com/ios-glyphs/90/fa314a/like.png', // Added the liked image URL here
  },
  {
    name: 'Comment',
    imageUrl: 'https://img.icons8.com/material-outlined/60/ffffff/speech-bubble.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/share.png',
  },
  {
    name: 'Save',
    imageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/save.png',
  },
];









const Posting = ({ Posting }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} style={{ backgroundColor: 'white' }} />

      <PostHeader Posting={Posting} />

      <PostImage Posting={Posting} />
    </View>
  );
};









// POST HEADER
const PostHeader = ({ Posting }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 5,
      alignItems: 'center',
    }}
  >
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={{ uri: Posting.profile_picture }}
        style={styles.story}
      />
      <Text
        style={{
          color: 'white',
          marginLeft: 5,
          fontWeight: '700',
        }}
      >
        {Posting.user}
      </Text>
    </View>

    <Text style={{ color: 'white', fontWeight: '900', fontSize: 24 }}>... </Text> {/* Adding space for ellipsis */}
  </View>
);











//IMAGE 
const PostImage = ({ Posting }) => (
  <Image
    source={{ uri: Posting.imageurl }}
    style={styles.postImage}
  />
);





//PostFooter
const PostFooter=()=> {

  <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />



};


const Icon=({imgStyle, imgUrl})=> {

  <TouchableOpacity>

    <Image style={imgStyle} source={{uri: imgUrl }} />

  </TouchableOpacity>



  
}




const styles = StyleSheet.create({
  story: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#00B5E2',
  },
  postImage: {
    width: '100%',
    height: 300, // Setting height to make sure the image doesn't overflow
    resizeMode: "cover", // Keeps aspect ratio intact
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});

export default Posting;
