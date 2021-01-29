import styled from 'styled-components'



const Messages = styled.div`
font-size: 16px;
font-weight: 400;
.message {        
    display: flex;
    margin: 20px 0;
    .def {
        margin: -15px 50px 0;
    }
}
.message-my {
    flex-direction: row-reverse;
    margin: 20px -10px 20px 10px;
    p{
        text-align: right;
    }
    .def {
        margin: -15px 10px 0 10px;
    }
}
`
const TextArea = styled.div`
display: inline-block;
background: #DCDCDC;
padding: 10px 15px;
border-radius: 20px;
margin: 0 10px;
`
const Img = styled.img`
width: 40px;
height: 40px;
min-width: 40px;
min-height: 40px;
border-radius: 50%;
overflow: hidden;
`
const Name = styled.p`
font-weight: 600;
`

export {Messages, Img, TextArea, Name}