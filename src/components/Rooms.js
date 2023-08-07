import React from 'react';
import styled from 'styled-components';
import room1 from '../assets/room1.jpg';
import shade from '../assets/shade.jpg';
import familyRoom from '../assets/Family-1-bunk-1024x642.jpeg';
import './Room.css';


const PositionDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 200px;
`;

const PositionPhoto = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
margin-bottom: 100px;
`;

const RoomPhoto = styled.img`
  display: flex;
  width: 300px;
  height: 200px;
  border: 2px solid transparent;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-right: 20px; /* Add margin to create gaps */
  transition: border-color 0.3s ease;
  

  &:last-child {
    margin-right: 0; /* Remove margin from the last child */
  }

  &:hover {
    border-color: #ffc56c;
  }
`;




const Rooms = () => {
  return (
    <div>
      <h1>Popular Rooms</h1>
      <div style={{ border: "0", height: "3px", backgroundColor: "#ffc56c", width: "20%", margin: "auto" }}></div>
      <PositionDiv>
        <p>Family Room</p>
        <p>Room with Bath Tub</p>
        <p>Family Room</p>
      </PositionDiv>
      <PositionPhoto>
        <RoomPhoto src={room1} alt="Room 1" />
        <RoomPhoto src={shade} alt="Bath Tub Room/Red Room" />
        <RoomPhoto src={familyRoom} alt="FamilyRoom" />
      </PositionPhoto>
    </div>
  );
};

export default Rooms;






