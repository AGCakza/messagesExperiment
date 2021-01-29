import logo from './logo.svg';
import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState  } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Page from './Components/Page'


firebase.initializeApp({
  apiKey: "AIzaSyDnZUQGdmZDalwlTLy1E3q1b9DxUz-qInI",
  authDomain: "messages-98171.firebaseapp.com",
  projectId: "messages-98171",
  storageBucket: "messages-98171.appspot.com",
  messagingSenderId: "782027107501",
  appId: "1:782027107501:web:de40feaf7c4ab0688c6a24"
});

const db = firebase.firestore();
const auth = firebase.auth();

const signInWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}
const signOut = (e) => {
  e.preventDefault();
  auth.signOut()
}


const App = () => {
  const [formValue, setFormValue] = useState('');
  const [user] = useAuthState(auth)
  const dummy = useRef()
  const AddMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = auth.currentUser;
    await db.collection('messages').add({
      message: formValue,
      name: displayName,
      uid: uid,
      photo: photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
  
    })
    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }
  return <Page dummy = {dummy} value = {formValue} setValue = {setFormValue} signOut = {signOut} user = {user} db = {db} auth = {auth} signInWithGoogle = {signInWithGoogle} AddMessage = {AddMessage}/>
}

export default App;
