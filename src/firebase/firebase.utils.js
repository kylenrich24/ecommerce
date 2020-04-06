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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // getting user
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  //check if user already exists
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
