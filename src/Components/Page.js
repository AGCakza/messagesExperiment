import React from 'react'
import {ChatRoomContainer} from './Components'
import {Container} from './Styles'

const Page = (props) => {
    return(
        <Container>
            <div>
                {props.user ? <ChatRoomContainer dummy = {props.dummy} db={props.db} auth = {props.auth}/> : <div><>
            <button className="sign-in" onClick={props.signInWithGoogle}>Sign in with Google</button>
            <p>Do not violate the community guidelines or you will be banned for life!</p>
            </></div>}
            </div>
            <form>
                <input value = {props.value} onChange = {(e) => props.setValue(e.target.value)}></input>
                <button onClick = {props.AddMessage}>Send</button>
            </form>
            <button onClick = {props.signOut}>SIGN OUT</button>
        </Container>
    )
}

export default Page