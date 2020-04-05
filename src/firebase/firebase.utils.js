import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCdJS8_FTPABVrFRqAFDxKuFnpbiZpB4Lc",
  authDomain: "ecommerece-f5407.firebaseapp.com",
  databaseURL: "https://ecommerece-f5407.firebaseio.com",
  projectId: "ecommerece-f5407",
  storageBucket: "ecommerece-f5407.appspot.com",
  messagingSenderId: "1017539800687",
  appId: "1:1017539800687:web:5dffd3504aadb6cb79a79a",
  measurementId: "G-GKSCDBD8MD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
