import styled from "styled-components";



export const ModalBackground = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  width: 60%;
  height: 70%;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  background-color:black;
  @media(max-width:560px){
   
    width: 100%;
  /* height: 70%; */
}
`;

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  color:white;
`;

export const Player = styled.button`
font-size:15px;
margin:0px 22px 0px 0px;
padding:0px 24px;
height:56px;
border-radius:4px;
cursor:pointer;
display: flex;
align-items:center;
border:none;
justify-content:center;
letter-spacing: 1.8px;
text-align: center;
text-transform: uppercase;
background: rgb(249, 249, 249);
border:none;
color:rgb(0,0,0);

img{
    width:32px;
}
&:hover{
    background:rgb(198, 198, 198);
}

@media(max-width:768px){
    height:45px;
    padding: 0px 12px;
    font-size:12px;
    margin:0px 10px 0px 0px;

    img{
        width:25px;
    }
}
`;

export const TrailerStyles = styled(Player)`
background:rgba(0,0,0,0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`;