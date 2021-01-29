import React, {useEffect} from 'react'
import ChatRoom from './ChatRoom'
import firebase from 'firebase'
import 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'



const ChatRoomContainer = (props) => {
    const messagesRef = props.db.collection('messages')
    const query = messagesRef.orderBy('createdAt')
    const [chatmsgs] = useCollectionData(query, { idField: 'id' })
    useEffect(() => {
        props.dummy.current.scrollIntoView({ behavior: 'smooth' });
      });
    return (
    <main>
        {chatmsgs && chatmsgs.map((msg, index) => <ChatRoom last = {chatmsgs[index-1] || msg} Myuid = {props.auth.currentUser.uid} msg = { msg } uid = {msg.uid} />)}
        
        <span ref={props.dummy}></span>
    </main>
    )
}
export default ChatRoomContainer