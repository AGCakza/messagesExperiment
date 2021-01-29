import React from 'react'
import {ChatRoomContainer} from './Components'
import {Container} from './Styles'
//<button onClick = {props.signOut}>SIGN OUT</button>
const Page = (props) => {
    return(
        <Container>
            <div className='bar'>
                <div>
                    {props.user ? <button className='sign-out' onClick = {props.signOut}>Sign Out 🚪</button> : 
                    <button className="sign-in" onClick={props.signInWithGoogle}>Sign in with Google 🔑</button>}                    
                </div>
            </div>
            <div className = 'main'>
                {props.user ? <ChatRoomContainer dummy = {props.dummy} db={props.db} auth = {props.auth}/> :
                <p id='needtologin'>Log In to see what's going on here, dude :)</p>}
            </div>
            <form className = 'msginput'>
                <input value = {props.value} onChange = {(e) => props.setValue(e.target.value)}></input>
                <button onClick = {props.AddMessage}>🤙</button>
            </form>
        </Container>
    )
}

export default Page