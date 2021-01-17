import styled from 'styled-components'



const Messages = styled.div`
.message {        
    display: flex;
    margin: 20px 0;
    .def {
        margin: -15px 50px 0;
    }
}
.message-my {
    flex-direction: row-reverse;
    p{
        text-align: right;
    }
    .def {
        margin: -15px 10px 0;
    }
}
`
const TextArea = styled.div`
display: flex;
background: darkgray;
padding: 10px 15px;
border-radius: 20px;
flex-direction: column;
margin: 0 10px;
`
const Img = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
overflow: hidden;
`
const Name = styled.p`
font-weight: 600;
`

export {Messages, Img, TextArea, Name}