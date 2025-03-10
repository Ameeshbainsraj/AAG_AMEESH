import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; // You can use FontAwesome or other icon libraries

const Header = () => {

  return (
    <View style={styles.container}>
      {/* Logo Text */}
      <Text style={styles.logo}>MY CAMPUS</Text>



      {/* Container for other icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
            }}
            style={styles.icon}
          />
        </TouchableOpacity>

        
        <TouchableOpacity>
            <View style={styles.unreadBadge}>

                <Text style={styles.unreadBadgeText}>11</Text>

            </View>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
            }}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%', // Take full width
    height: 120, // Set header height
    backgroundColor: '#000', // Set the background color
    justifyContent: 'center', // Center the content vertically
    paddingLeft: 20, // Add padding from the left side for the logo
    position: 'absolute', // Stick the header at the top of the screen
    top: 0, // Pin it to the top
    flexDirection: 'row', // Align logo and icon in a row
    alignItems: 'center', // Center content vertically
    justifyContent: 'space-between', // Space out the items (logo and icon)
    paddingRight: 20, // Add some space on the right for the message icon
  },
  logo: {
    fontSize: 24, // Font size of the logo
    color: 'white', // Logo text color
    fontWeight: 'bold', // Make the text bold
  },
  messageIcon: {
    marginRight: 5, // Margin to space out the icon a bit
  },
  iconsContainer: {
    flexDirection: 'row', // Align the icons in a row
    justifyContent: 'space-between', // Space the icons evenly
    alignItems: 'center', // Center the icons vertically
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10, // Add spacing between icons
  },
  unreadBadge: {
    backgroundColor: '#00B5E2',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    },


    unreadBadgeText: {
        color: 'white',
        fontweight: '600',
        },

});

export default Header;
