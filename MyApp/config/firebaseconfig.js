// /firebase/config.js
import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBwvnVw0IeBkVl_08ZoIjNMW_JPKFuNrS0", 
  authDomain: "mycampus-1489b.firebaseapp.com",
  projectId: "mycampus-1489b",
  storageBucket: "mycampus-1489b.appspot.com",
  messagingSenderId: "427991580336",
  appId: "1:427991580336:web:5f07a35d5e344dfe8e59ea"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized
}

export { firebase, firestore, storage };
