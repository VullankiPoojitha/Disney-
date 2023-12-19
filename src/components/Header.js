/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/users/userSlice';
import {Nav, Logo, Login, NavMenu, SignOut, UserLoginIn, DropDown, Sidebar, NavButton, NavItem, NavOptions} from './styles/HeaderStyles';


export default function Header() {
    const dispatch = useDispatch();
    const username = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);
    const userEmail = useSelector(selectUserEmail);
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = () => {
      setIsOpen(false); 
    //   scrollToRecommendsComponent();
      // Close sidebar when an option is selected
      // Add your logic for handling option click here
    };

    useEffect(() => {
        // Reset scroll position to the top when the component mounts
        window.scrollTo(0, 0);
    
        // Reset scroll position on page reload or history navigation
        const handleScrollRestoration = () => {
          window.scrollTo(0, 0);
        };
    
        window.history.scrollRestoration = 'manual';
        window.addEventListener('beforeunload', handleScrollRestoration);
    
        return () => {
          window.removeEventListener('beforeunload', handleScrollRestoration);
        };
      }, []);
    
    // const scrollToOriginalComponent = () => {
    //     const originalComponent = document.getElementById('originalComponent'); // Replace with your component's ID
    //     if (originalComponent) {
    //       originalComponent.scrollIntoView({ behavior: 'smooth' });
    //     }
        
    //   };
    const scrollToOriginalComponent = () => {
      setIsOpen(false); 

        const originalComponent = document.getElementById('originalComponent');
        if (originalComponent) {
          const offset = 100; // Adjust this value based on your layout
          const targetPosition = originalComponent.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      };
      const scrollToRecommendsComponent = () => {
      setIsOpen(false); 

        const recommendComponent = document.getElementById('recommendComponent');
        if (recommendComponent) {
          const offset = 100; // Adjust this value based on your layout
          const targetPosition = recommendComponent.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      };
      const scrollToNewDisneyComponent = () => {
      setIsOpen(false); 

        const newDisneyComponent = document.getElementById('newDisneyComponent');
        if (newDisneyComponent) {
          const offset = 100; // Adjust this value based on your layout
          const targetPosition = newDisneyComponent.getBoundingClientRect().top + window.scrollY - offset;
          console.log(newDisneyComponent.getBoundingClientRect().top + window.scrollY - offset, offset,window.scrollY,newDisneyComponent.getBoundingClientRect().top,'scrollll' )
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      };
      const scrollToTrendingComponent = () => {
      setIsOpen(false); 

        const trendingComponent = document.getElementById('trendingComponent');
        if (trendingComponent) {
          const offset = 100; // Adjust this value based on your layout
          const targetPosition = trendingComponent.getBoundingClientRect().top + window.scrollY - offset;
          console.log(trendingComponent.getBoundingClientRect().top + window.scrollY - offset, offset,window.scrollY,trendingComponent.getBoundingClientRect().top,'scrollll' )

          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      };
      const scrollToAllMoviesComponent = () => {
      setIsOpen(false); 

        const allMoviesComponent = document.getElementById('allMovieComponent');
        if (allMoviesComponent) {
          const offset = 100; // Adjust this value based on your layout
          const targetPosition = allMoviesComponent.getBoundingClientRect().top + window.scrollY - offset;
          console.log(allMoviesComponent.getBoundingClientRect().top + window.scrollY - offset, offset,window.scrollY,allMoviesComponent.getBoundingClientRect().top,'scrollll' )

          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      };
    //   const scrollToRecommendsComponent = () => {
    //     const recommendComponent = document.getElementById('recommendComponent'); // Replace with your component's ID
    //     if (recommendComponent) {
    //       recommendComponent.scrollIntoView({ behavior: 'smooth' });
    //     }
        
    //   };
    

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user);
                navigate('/home');
            }
        })
    }, [username])

    const handleAuth = () => {
        if (!username) {
            signInWithPopup(auth, provider).then((result) => {
                console.log(result);
                setUser(result.user);
            }).catch((error) => {
                alert(error.message);
            })
        } else if (username) {
            auth.signOut().then(() => {
                dispatch(setSignOutState(null, null, null));
                navigate('/');
            })
        }

    }
    // console.log(username, 'username');
    const setUser = (user) => {
        dispatch(setUserLoginDetails({ name: user.displayName, email: user.email, photo: user.photoUrl, }))
    }
    return <Nav>
        <Logo>Disney+</Logo>
        <NavButton onClick={toggleSidebar}>
            <img src="/images/menuIcon.svg" width={15} height={15} alt=''/>
        </NavButton>
      <Sidebar isOpen={isOpen}>
      <div style={{display:'flex', justifyContent:'flex-end',padding: '10px 10px 0px 0px'}}>
        <button onClick={()=>handleOptionClick()} style={{background:'#000',border:'none',color:'#fff',fontSize:'16px'}}>x</button>
      </div>
        <NavOptions>
        <a href="/home">
          <NavItem >HOME</NavItem>
                           
                            </a>
          <NavItem onClick={scrollToRecommendsComponent}>RECOMMENDS</NavItem>
          <NavItem onClick={scrollToNewDisneyComponent}>NEW TO DISNEY+</NavItem>
          <NavItem onClick={scrollToOriginalComponent}>ORIGINALS</NavItem>
          <NavItem onClick={scrollToAllMoviesComponent}>MOVIES</NavItem>
          <NavItem onClick={scrollToTrendingComponent}>TRENDING SERIES</NavItem>
        </NavOptions>
      </Sidebar>
        {
            username ? (
                <Login onClick={handleAuth}>Login</Login>)
                : (
                    <>
                        <NavMenu>
                            <a href="/home">
                                <img src="/images/logo.svg" alt="home" />
                                <span>HOME</span>
                            </a>
                            {/* <a href="/home">
                                <img src="/images/search.svg" alt="home" />
                                <span>SRARCH</span>
                            </a> */}
                             <a onClick={scrollToRecommendsComponent}>
                                {/* <img src="/images/search.svg" alt="home" /> */}
                                <span>RECOMMENDS</span>
                            </a>
                            <a onClick={scrollToNewDisneyComponent}>
                                <img src="/images/plus.svg" alt="home" />
                                <span>NEW TO DISNEY+</span>
                            </a>
                            <a onClick={scrollToOriginalComponent}>
                                <img src="/images/start.svg" alt="home" />
                                <span>ORIGINALS</span>
                            </a>
                            <a onClick={scrollToAllMoviesComponent}>
                                <img src="/images/movie.svg" alt="home" />
                                <span>MOVIES</span>
                            </a>
                            <a onClick={scrollToTrendingComponent}>
                                <img src="/images/series.svg" alt="home" />
                                <span>TRENDING SERIES</span>
                            </a>
                        </NavMenu>
                        <SignOut>
                            <UserLoginIn style={{marginRight:'20px'}}>{username}
                                <img src="/images/user-icon.svg" alt="home" /></UserLoginIn>
                            <DropDown>
                                <span onClick={handleAuth}>Sign out</span>
                            </DropDown>
                        </SignOut>
                        {/* <Login onClick={handleAuth}>Login</Login> */}
                    </>
                )
        }
    </Nav>
}

// const SignOut = styled.div``;

// const DropDown = styled.div`
// position: absolute;
// top:60px;
// right:10px;
// background:rgb(19,19,19);
// border:1px solid rgba(151,151,151,0.34);
// border-radius:4px;
// box-shadow:rgb(0 0 0/50%) 0px 0px 18px 0px;
// padding:8px;
// letter-spacing:3px;
// width:110px;
// font-family:"Courier New", Courier, monospace;
// /* font-weight: 500; */
// font-size: 14px;
// opacity:0;
// &:hover{
//    opacity:1;
//    cursor: pointer;
// }
// `;
// const UserLoginIn = styled.div`
//         color: rgb(249,249,249);
//         font-size:13px;
//         letter-spacing:1.42px;
//         line-height:1.08;
//         padding:2px 0px;
//         white-space:nowrap;
//         /* position:relative; */
//         font-family:"Courier New", Courier, monospace;
//         font-weight: 500;
//         font-size: 20px;
//          `;

// const Nav = styled.nav`
// position:fixed;
// top:0;
// left:0;
// right:0;
// height:70px;
// background-color:#090b13;
// display:flex;
// justify-content:space-between;
// align-items:center;
// padding:0 36px;
// letter-spacing:5px;
// z-index:3;
// /* font-family: "Brush Script MT", cursive; */
// font-weight:600;
// font-size:50px;
// `;

// const Logo = styled.a`
// padding:0;
// width:80px;
// margin-top:4px
// `;

// const NavMenu = styled.div`
// align-items: center;
// display: flex;
// flex-flow: row nowrap;
// height: 100%;
// justify-content: flex-end;
// margin:0px;
// padding:0px;
// position:relative;
// margin-right:auto;
// margin-left: 150px;
// /* font-family:"Courier New", Courier, monospace;
// font-weight: 500;
// font-size: 20px; */


// a{
//     display:flex;
//     align-items:center;
//     padding:0 12px;

//     img{
//         height: 20px;
//         min-width: 20px;
//         width:20px;
//     }

//     span{
//         color: rgb(249,249,249);
//         font-size:13px;
//         letter-spacing:1.42px;
//         line-height:1.08;
//         padding:2px 0px;
//         white-space:nowrap;
//         position:relative;
//         font-family:"Courier New", Courier, monospace;
//         font-weight: 500;
//         font-size: 20px; 
    

//     &:before{
//         background-color:rgb(249,249,249);
//         border-radius:0px 0px 4px 4px;
//         bottom:-6px;
//         content:'';
//         height: 2px;
//         left:0px;
//         opacity:0;
//         position: absolute;
//         right:0px;
//         transform-origin: left center;
//         transform: scaleX(0);
//         transition: all 250ms cubic-bezier(0.25, 0.46,0.45,0.94) 0s;
//         visibility: hidden;
//         width:auto;
//     }
// }


// &:hover{
//     span:before {
//         transform:scaleX(1);
//         visibility:visible;
//         opacity: 1 !important;
//     }
// }
// }
// @media (max-width: 768px){
// display:none;
// }
// `;

// const Login = styled.a`
// background-color: rgba(0,0,0,0.6);
// padding:8px 16px;
// text-transform:uppercase;
// letter-spacing:1.5px;
// border:1px solid #f9f9f9;
// border-radius:4px;
// transition: all 0.2s ease 0s;
// font-family:"Courier New", Courier, monospace;
//         font-weight: 500;
//         font-size: 20px; 
//    cursor: pointer;


// &:hover{
//     background-color:#f9f9f9;
//     color:#000;
//     border-color:transparent;
// }
// `;
