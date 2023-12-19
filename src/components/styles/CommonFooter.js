import styled from 'styled-components';

export const FooterStyles = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 20px;
  text-align: center;
  z-index:1;
  font-size:12px;

  @media (max-width: 768px) {
    /* Adjust styles for smaller screens */
    padding: 10px;
    font-size: 10px;
  }
`;