import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Navbar.css';


const ColorNavbar = styled.div`
  position: fixed;
  background-color: black;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  padding: 0 80px;
`;

const StyledButtonElement = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  height: 40px;


  transition: transform 0.2s ease-in-out, color 1s ease-in-out;

  &:hover {
    cursor: pointer;
    color: #ddab61;
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const navigate = useNavigate();

  const buttonHomeHandler = () => {
    navigate('Home');
  };

  const buttonCheckRooms = () => {
    navigate('/CheckRooms');
  };
  
  return (
    <ColorNavbar>
      <StyledButtonElement onClick={buttonHomeHandler}>Home</StyledButtonElement>
      <StyledButtonElement onClick={buttonCheckRooms}>CheckRooms</StyledButtonElement>
    </ColorNavbar>
  );
}; 

export default Navbar;