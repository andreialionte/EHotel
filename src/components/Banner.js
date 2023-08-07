import React from 'react';
import background from '../assets/background.jpg';
import './Banner.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Banner = (props) => {
  const bannerStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '1000px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.75)',
  };

  const Navigate = useNavigate();

  const buttonClickHandler = () => {
    Navigate('/CheckRooms');
  };

  const RotateWord = styled.div`
    transition: transform ease-in-out 1.2s;
    &:hover {
      transform: rotate(360deg);
    }
  `;

  const StyledButton = styled.div`
    display: flex;
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    background-color: #dd7973;
    border-radius: 10px;
    height: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-color: #dd7973;
    transition: transform 1s ease-in-out, background-color 1s ease-in-out;
    box-shadow: rgba(0,0,0,0.5) 5px 5px 15px;
    text-shadow: rgba(0,0,0,0.5) 5px 5px 5px;
  &:hover{
        transform: scale(1.1);
        background-color: transparent;
      }
  `;


  return (
    <div style={bannerStyle}>
      <div>
        <RotateWord>
          <h1>{props.title}</h1>
        </RotateWord>
        <p>{props.description}</p>
        <StyledButton onClick={buttonClickHandler}>{props.titleButton}</StyledButton>
      </div>
    </div>
  );
};

export default Banner;
