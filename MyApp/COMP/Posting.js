import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Divider } from 'react-native-elements';

// POST FOOTER ICONS
const postFooterIcons = [
  {
    name: 'Like',
    imageUrl: 'https://cdn-icons-png.flaticon.com/256/1000/1000621.png',
    likedImageUrl: 'https://cdn-icons-png.flaticon.com/256/535/535183.png', // Added the liked image URL here
  },
  {
    name: 'Comment',
    imageUrl: 'https://cdn-icons-png.flaticon.com/256/14034/14034473.png',
  },
  {
    name: 'Share',
    imageUrl: 'https://cdn-icons-png.flaticon.com/256/14026/14026276.png',
  },
  {
    name: 'Save',
    imageUrl: 'https://cdn-icons-png.flaticon.com/256/14360/14360517.png',
  },
];

const Posting = ({ Posting }) => {
  return (
    <ScrollView style={{ marginBottom: 30 , flex: 1}}>

      <Divider width={1} style={{ backgroundColor: 'white' }} />

      <PostHeader Posting={Posting} />

      <PostImage Posting={Posting} />

      <View style={{ marginHorizontal: 15, marginTop: 10 }}>

        <PostFooter />
        <Likes Posting={Posting}/>

      </View>

    </ScrollView>
  );
};

// POST HEADER
const PostHeader = ({ Posting }) => (
  <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 5, alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image source={{ uri: Posting.profile_picture }} style={styles.story} />
      <Text style={{ color: 'white', marginLeft: 5, fontWeight: '700' }}>
        {Posting.user}
      </Text>
    </View>
    <Text style={{ color: 'white', fontWeight: '900', fontSize: 24 }}>...</Text> {/* Adding space for ellipsis */}
  </View>
);

// IMAGE 
const PostImage = ({ Posting }) => (
  <Image source={{ uri: Posting.imageurl }} style={styles.postImage} />
);

// POST FOOTER
const PostFooter = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.leftFooterIconsContainer}>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
        <Icon 
          
            imgStyle={[styles.footerIcon, styles.shareIcon]} 
            imgUrl={postFooterIcons[2].imageUrl} 
            />

      </View>

      <View style = {{flex: 1 , alignItems: 'flex-end'}}>

      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
      </View>
      


    </View>
  );
};

// ICON COMPONENT
const Icon = ({ imgStyle, imgUrl }) => {
  return (
    <TouchableOpacity>
      <Image style={imgStyle} source={{ uri: imgUrl }} />
    </TouchableOpacity>
  );
};


//Likes

const Likes= ({ Posting })=>(
<View style={{flexDirection: 'row', marginTop: 4}}>

  <Text style={{color: 'white', fontWeight: '600'}}> {Posting.Likes.toLocaleString('en')} Likes</Text>

</View>
);







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
    width: 24,
    height: 24,
  },

  shareIcon:{

    transform: [{rotate:'10deg'}],
    marginTop: 0,
    marginRight: 9,
  },

  leftFooterIconsContainer: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'space-between',
  },
});

export default Posting;
