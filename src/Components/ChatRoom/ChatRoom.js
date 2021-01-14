import React from 'react'
import {Message, Img, TextArea, Name, MyMessage} from './Styles'

const ChatRoom = (props) => {
    let uid = props.uid
    {if (uid === props.uid) console.log('repeat') 
    else console.log('norepeat')}
    return(
        <div>
            {props.Myuid === props.msg.uid ? 
                <MyMessage key = {props.msg.key}>
                    <Img src = {props.msg.photo} />
                        <TextArea>
                        <Name>{props.msg.name}</Name>
                        <p>{props.msg.message}</p>
                    </TextArea>
                </MyMessage> 
            : 
                <Message key = {props.msg.key}>
                    <Img src = {props.msg.photo} />
                    <TextArea>
                        <Name>{props.msg.name}</Name>
                        <p>{props.msg.message}</p>
                    </TextArea>
                </Message>
            }
        </div>
    )
}

export default ChatRoom