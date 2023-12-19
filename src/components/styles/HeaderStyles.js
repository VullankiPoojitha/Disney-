import styled from "styled-components";

export const SignOut = styled.div``;

export const DropDown = styled.div`
position: absolute;
top:60px;
right:10px;
background:rgb(19,19,19);
border:1px solid rgba(151,151,151,0.34);
border-radius:4px;
box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px;
padding:8px;
letter-spacing:3px;
width:110px;
font-family:"Courier New", Courier, monospace;
/* font-weight: 500; */
font-size: 14px;
opacity:0;
&:hover{
   opacity:1;
   cursor: pointer;
}
`;
export const UserLoginIn = styled.div`
        color: rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        /* position:relative; */
        font-family:"Courier New", Courier, monospace;
        font-weight: 500;
        font-size: 20px;
         `;

export const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
letter-spacing:5px;
z-index:3;
/* font-family: "Brush Script MT", cursive; */
font-weight:600;
font-size:50px;
`;

export const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px
`;

export const NavMenu = styled.div`
@media (min-width: 1336px){


align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left: 150px;
/* font-family:"Courier New", Courier, monospace;
font-weight: 500;
font-size: 20px; */


a{
    display:flex;
    align-items:center;
    padding:0 12px;

    img{
        height: 20px;
        min-width: 20px;
        width:20px;
    }

    span{
        color: rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        position:relative;
        font-family:"Courier New", Courier, monospace;
        font-weight: 500;
        font-size: 20px; 
    

    &:before{
        background-color:rgb(249,249,249);
        border-radius:0px 0px 4px 4px;
        bottom:-6px;
        content:'';
        height: 2px;
        left:0px;
        opacity:0;
        position: absolute;
        right:0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
        visibility: hidden;
        width:auto;
    }
}


&:hover{
    span:before {
        transform:scaleX(1);
        visibility:visible;
        opacity: 1 !important;
    }
}
}
}
@media (max-width: 1336px){
display:none;
}
`;

export const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition: all 0.2s ease 0s;
font-family:"Courier New", Courier, monospace;
        font-weight: 500;
        font-size: 20px; 
   cursor: pointer;


&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`;

















// new styles
export const Sidebar = styled.div`
@media (min-width: 1336px){

display:none;
}
@media (max-width: 1336px){
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-300px')}; /* Adjust width as needed */
  height: 100%;
  width: 300px; /* Adjust width as needed */
  background-color: #000;
  transition: right 0.3s ease-in-out;
}
`;

export const NavButton = styled.button`
@media (min-width: 1336px){

display:none;
}

@media (max-width: 1336px){
  position: fixed;
  top: 20px;
  right: 20px;
  /* z-index: 999; */
  z-index: -1;

}
`;

export const NavOptions = styled.ul`
@media (min-width: 1336px){

display:none;
}

@media (max-width: 1336px){

  list-style: none;
  padding: 0;
  color:#fff;
}
`;

export const NavItem = styled.li`
@media (min-width: 1336px){

display:none;
}

@media (max-width: 1336px){

  padding: 10px;
  cursor: pointer;
  font-size: 12px;
    padding-top: 20px;
  &:hover {
    background-color: #f0f0f0;
    color:#000;
  }
}
`;




















/* import styled from "styled-components";

export const SignOut = styled.div``;

export const DropDown = styled.div`
position: absolute;
top:60px;
right:10px;
background:rgb(19,19,19);
border:1px solid rgba(151,151,151,0.34);
border-radius:4px;
box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px;
padding:8px;
letter-spacing:3px;
width:110px;
font-family:"Courier New", Courier, monospace;
font-size: 14px;
opacity:0;
&:hover{
   opacity:1;
   cursor: pointer;
}
`;
export const UserLoginIn = styled.div`
        color: rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        font-family:"Courier New", Courier, monospace;
        font-weight: 500;
        font-size: 20px;
         `;

export const Nav = styled.nav`
position:fixed;
top:0;
left:0;
right:0;
height:70px;
background-color:#090b13;
display:flex;
justify-content:space-between;
align-items:center;
padding:0 36px;
letter-spacing:5px;
z-index:3;
font-weight:600;
font-size:50px;
`;

export const Logo = styled.a`
padding:0;
width:80px;
margin-top:4px
`;

export const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin:0px;
padding:0px;
position:relative;
margin-right:auto;
margin-left: 150px;



a{
    display:flex;
    align-items:center;
    padding:0 12px;

    img{
        height: 20px;
        min-width: 20px;
        width:20px;
    }

    span{
        color: rgb(249,249,249);
        font-size:13px;
        letter-spacing:1.42px;
        line-height:1.08;
        padding:2px 0px;
        white-space:nowrap;
        position:relative;
        font-family:"Courier New", Courier, monospace;
        font-weight: 500;
        font-size: 20px; 
    

    &:before{
        background-color:rgb(249,249,249);
        border-radius:0px 0px 4px 4px;
        bottom:-6px;
        content:'';
        height: 2px;
        left:0px;
        opacity:0;
        position: absolute;
        right:0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
        visibility: hidden;
        width:auto;
    }
}


&:hover{
    span:before {
        transform:scaleX(1);
        visibility:visible;
        opacity: 1 !important;
    }
}
}
@media (max-width: 768px){
display:none;
}
`;

export const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding:8px 16px;
text-transform:uppercase;
letter-spacing:1.5px;
border:1px solid #f9f9f9;
border-radius:4px;
transition: all 0.2s ease 0s;
font-family:"Courier New", Courier, monospace;
        font-weight: 500;
        font-size: 20px; 
   cursor: pointer;


&:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
}
`; */