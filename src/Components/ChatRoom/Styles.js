import styled from 'styled-components'

const Message = styled.div`
display: flex;
margin: 15px 0;
`
const TextArea = styled.div`
display: flex;
flex-direction: column;
margin: 0 10px;
`
const MyMessage = styled(Message)`
flex-direction: row-reverse;
p{
    text-align: right;
}
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

export {Message, Img, TextArea, Name, MyMessage}