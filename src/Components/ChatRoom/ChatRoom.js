import React from 'react'
import {Messages, Img, TextArea, Name} from './Styles'

const ChatRoom = (props) => {
    return(
        <Messages>
            
            <div key = {props.msg.key} className = {props.uid === props.Myuid ? 'message message-my' : 'message'}>
            { props.last.uid === props.msg.uid ? null : props.msg.uid === props.Myuid ? null : <Img src = {props.msg.photo} />}                    
                    <TextArea className = { props.last.uid === props.msg.uid ? 'def' : null}>
                        {props.Myuid === props.msg.uid ? null : props.last.uid === props.msg.uid ? null : <Name>{props.msg.name}</Name>}
                        <p>{props.msg.message}</p>
                    </TextArea>
            </div> 
        </Messages>
    )
}

export default ChatRoom