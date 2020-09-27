import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVYyHctYYPiDVVcRnhzZA0kKNMJgUSmV8",
  authDomain: "new-gellary.firebaseapp.com",
  databaseURL: "https://new-gellary.firebaseio.com",
  projectId: "new-gellary",
  storageBucket: "new-gellary.appspot.com",
  messagingSenderId: "271954106329",
  appId: "1:271954106329:web:17e422469007b21f152bc8",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
