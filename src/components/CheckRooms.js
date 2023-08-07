import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import FamilyRoom from './HotelRooms/FamilyRoom'
import backgroundPh from '../assets/backgroundPh.jpg'
import H1Ph1 from "../assets/hotel1/sasha-kaunas-67-sOi7mVIk-unsplash.jpg";
import H2Ph1 from "../assets/hotel2/modern_hotel_room.jpg";
import H3Ph1 from "../assets/hotel3/images.jpg";
import H4Ph1 from "../assets/hotel4/images.jpg";
import H5Ph1 from "../assets/hotel5/5db763fa045a312d752323b2.webp";
import H6Ph1 from "../assets/hotel6/hotel-interior-design-trends.webp";
import H7Ph1 from "../assets/hotel7/images.jpg";
import H8Ph1 from "../assets/hotel8/5-Star-Hotel-Room-Size-05212022.webp";
import Footer from './Footer';




const StyledH1Bar = styled.div`
  border: 0;
  height: 3px;
  width: 20%;
  background-color: #ffc56c;
  margin: auto;
  `

const CheckRoomsStyle = styled.div`
background-image: url(${backgroundPh});
background-size: cover;
background-position: center;
height: 900px;
width: 100%;
`

const StyledAnimatedTitle = styled.div`
transition: transform ease-in-out 1.2s;
&:hover{
  transform: rotate(360deg);
}
`;


const TextStyled = styled.div`
color: white;
display: flex;
justify-content: center;
text-align: center;
align-items: center;
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
flex-direction: column;
height: 900px;
`;

const PositionStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin-bottom: 100px;
`;

const Row = styled.div`
display: flex;
flex-direction: column;
`;

const PhotoStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 20px;
margin-bottom: 20px;
transform-style: preserve-3d;
overflow: hidden;
`;


const PhotoStyled2 = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 200px;
  transform-style: preserve-3d;
  overflow: hidden;
  margin-bottom: 100px;
`;

const RoomCard = styled.div`
  display: flex;
  background-size: cover;
  background-position: center;
  height: 100px;
  width: 10%;
  position: relative;
  cursor: pointer;

  &::after {
    content: "Price per night $${props => props.price}";
    display: flex;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    opacity: 0;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    bottom: auto;
    right: 0;
    transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
  }

  &::before {
    content: "${props => props.roomType}";
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4px 8px;
    opacity: 0;
    transition: opacity 0.75s ease-in-out, transform 0.75s ease-in-out;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
  }

  &:hover::after,
  &:hover::before {
    opacity: 1;
  }
`;

const ButtonStyled = styled.button`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background-color: #DD7973;
border-radius: 8px;
text-decoration: none;
color: white;
font-size: 20px;
font-weight: 800;
cursor: pointer;
border-radius: 10px;
border-style: none;
height: 40px;
width: 200px;
transition: transform 1s ease-in-out, background-color 1s ease-in-out;
box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
text-shadow: rgba(0,0,0,0.5) 5px 5px 5px;
&:hover{
  background-color: transparent;
  transform: scale(1.1);
}
`


const CheckRooms = () => {

  const navigate = useNavigate();
  
  const ButtonHandler =() =>{
    navigate("/FamilyRoom");
  }
  
const returnHomeButtonHandler = () =>{
  navigate("/");
}

  const [guests, setGuests] = useState("1");
  const [roomType, setRoomType] = useState("all");
  const [price, setPrice] = useState("600");
  const [breakfast, setBreakfast] = useState(false);
  const [pets, setPets] = useState(false);
  const [allRooms, setAllRooms] = useState("all");
  
  
  const photos = [
  {id: 1, src: H1Ph1, title:"Family", price: 50, roomType: "Single", pets:true, breakfast: true, guests: 1, allRooms: "all"},
  {id:2, src: H2Ph1, title:"Family", price: 90, roomType: "Double", pets: false, breakfast: true, guests: 3, allRooms: "all"},
  {id:3, src: H3Ph1, title:"Family", price: 80, roomType: "Double", pets: false, breakfast: false, guests: 2, allRooms: "all"},
  {id:4, src: H4Ph1, title:"Family", price: 160, roomType: "Double", pets: false, breakfast: false, guests: 2, allRooms: "all"},
  {id:5, src: H5Ph1, title:"Family", price: 390, roomType: "Family", pets: false, breakfast: false, guests: 6, allRooms: "all"},
  {id:6, src: H6Ph1, title:"Family", price: 260, roomType: "Family",pets: false, breakfast: false, guests: 4, allRooms: "all"},
  {id:7, src: H7Ph1, title:"Family", price: 40, roomType: "Single", pets:true, breakfast: true, guests: 1, allRooms: "all"},
  {id:8, src:H8Ph1, title:"Family", price: 280, roomType: "Family", pets: true, breakfast: true, guests: 5, allRooms: "all"},
  ];
  
  
  const filteredPhotos = photos.filter(photo => {
    return (
      photo.guests >= guests &&
      photo.price <= price &&
      (photo.breakfast === breakfast || !breakfast) &&
      (photo.pets === pets || !pets) &&
      (roomType === "all" || roomType === photo.roomType) &&
      //when i select all rooms it should show all the rooms
      (allRooms === "all" || allRooms === photo.allRooms)


    );
  });
  







  const nextFourPhotos = filteredPhotos.slice(4, 8);
  const firstFourPhotos = filteredPhotos.slice(0, 4);
  
  
  
  
  return (
    <div>
      <CheckRoomsStyle>
        <TextStyled>
          <StyledAnimatedTitle>
            <h1>Check Rooms Page</h1>
          </StyledAnimatedTitle>
          <p>Here is some content specific to the CheckRooms page.</p>
          <ButtonStyled onClick={returnHomeButtonHandler}>Return Home</ButtonStyled>
        </TextStyled>
      </CheckRoomsStyle>
      <h1>Search Rooms</h1>
      <StyledH1Bar />
  
  
  
  <PositionStyled>
  <Row>
  <p>Rooms Type</p>
        <select value={roomType} onChange={(event) => setRoomType(event.target.value)}>
            <option value="All" >all</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Family">Family</option>
         </select>
         </Row>
         <Row>
        <p>Guests</p>
        <select type="number" value={guests} onChange={(event) => setGuests(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        </select>
        </Row>
  
        <Row>
        <p>Room Price ${price}</p>
          <input
            type="range"
            min="0"
            max="600"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </Row>
         <input type="checkbox" checked={breakfast} onChange={(event) => setBreakfast(event.target.checked)} />Breakfast
        <input type="checkbox" checked={pets} onChange={(event) => setPets(event.target.checked)} />Pets
        </PositionStyled>
  
  
  
  <PhotoStyled>
          {firstFourPhotos.map((photo) => (
            <RoomCard
              key={photo.id}
              style={{ backgroundImage: `url(${photo.src})` }}
              price={photo.price}
              roomType={photo.roomType}
            >
            </RoomCard>
            ))} 
        </PhotoStyled>
  
        <PhotoStyled2>
          {nextFourPhotos.map((photo) => (
            <RoomCard
              key={photo.id}
              style={{ backgroundImage: `url(${photo.src})` }}
              price={photo.price}
              roomType={photo.roomType}
            >
            </RoomCard>
            ))}
        </PhotoStyled2>
  
  {/* <PhotoStyled>
    <ImportH1PH1 key={photos[0].id}></ImportH1PH1>
    <ImportH2PH1 key={photos[1].id}></ImportH2PH1>
    <ImportH3Ph1 key={photos[2].id}></ImportH3Ph1>
    <ImportH4Ph1 key={photos[3].id}></ImportH4Ph1>
  </PhotoStyled>
  
  <PhotoStyled2>
  <ImportH5Ph1 key={photos[4].id}></ImportH5Ph1>
  <ImportH6Ph1 key={photos[5].id}></ImportH6Ph1>
  <ImportH7Ph1 key={photos[6].id}></ImportH7Ph1>
  <ImportH8Ph1 key={photos[7].id}></ImportH8Ph1>
  </PhotoStyled2> */}
    <Footer />
      </div>
    );
  };
  
  export default CheckRooms;