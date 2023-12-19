import React, { useState } from 'react';
import { ModalBackground, ModalContainer, CloseButton, TrailerStyles } from './styles/ModalStyles';
// import styled from 'styled-components';

// const ModalBackground = styled.div`
//   display: ${(props) => (props.isOpen ? 'flex' : 'none')};
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// const ModalContainer = styled.div`
//   background-color: #fff;
//   width: 60%;
//   height: 60%;
//   padding: 20px;
//   border-radius: 8px;
//   position: relative;
// `;

// const CloseButton = styled.button`
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   font-size: 18px;
// `;

const Sample = ({ utube }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <TrailerStyles onClick={toggleModal}><img src="/images/play-icon-white.png" alt="" />Trailer</TrailerStyles>
            <ModalBackground isOpen={isOpen}>
                <ModalContainer onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={toggleModal}>&times;</CloseButton>
                    {/* <h2 style={{ color: 'black' }}>Modal Title</h2>
                    <p style={{ color: 'black' }}>This is the content of the modal. You can put anything here.</p> */}
                    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '30px' }}>
                        <iframe width="1000" height="480" src={utube} title="YouTube video player" allowFullScreen></iframe>
                    </div>
                </ModalContainer>
            </ModalBackground>
        </div>
    );
};

export default Sample;
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/bqUGX1xdXZc?si=qb7FyVDDdBGOxtJ_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }



// 1.
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/r2ofrRyJRZo?si=tIckTgRGpdnZMXjN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }


// 2
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/FTV4FUlcIwQ?si=Gux3IdXLGp1niw1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/1u0rQ7J3oS4?si=GQPMXzgr96xIQZms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */ }