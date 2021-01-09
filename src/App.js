import logo from './logo.svg';
import './App.css';
import React from 'react';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState  } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore';


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

const AddMessage = async (e) => {  
  e.preventDefault();
  const { uid, photoURL } = auth.currentUser;
  await db.collection('messages').add({
    message: 'Hello, world!',
    uid: uid,
    photo: photoURL,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()

})
}


const App = () => {
  const [user] = useAuthState(auth)
  return(
    <div>
      <div>
        {user ? <ChatRoom /> : <SignIn />}
      </div>
      <div>
        <input></input>
        <button onClick = {AddMessage}>Send</button>
      </div>
    </div>
  )
}
const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}
const ChatRoom = () => {
  const messagesRef = db.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)
  const [chatmsgs] = useCollectionData(query, { idField: 'id' })
  console.log(chatmsgs)
  return(
    <div>
      <h1>Messages:</h1>
      {chatmsgs && chatmsgs.map(msg => <div key={msg.id}><img src={msg.photo}></img>{msg.message}</div>)}
    </div>
  )
}

export default App;
