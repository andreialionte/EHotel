import React from 'react';
import Banner from '../components/Banner';
import Services from '../components/Services';
import Rooms from '../components/Rooms'
import {motion} from 'framer-motion'
import Footer from '../components/Footer'

const Service = [
  { title: "Spa and Wellness Services", description: "Spa and Wellness Services" },
  { title: "Airport Shuttle", description: "Provide transportation services to and from the airport to enhance convenience for guests arriving or departing." },
  { title: "Tour and Excursion Services", description: "Assist guests in organizing tours, excursions, and sightseeing activities, providing them with a comprehensive travel experience." }
];


const Home = () => {
  return (
    <div>
      <Banner title="Villa Amella" description="Premium Rooms Starting at 249$" titleButton="Check our rooms" />
      <div style={{backgroundColor: "#cccccc", color: "black"}}>
      <h1>Services</h1>
      <div style={{border: "0",
  height: "3px",
  backgroundColor: "#ffc56c",
  width: "20%",
  margin: "auto"}}></div>
      <Services title={Service[0].title} description={Service[0].description} />
      <Services title={Service[1].title} description={Service[1].description} />
      <Services title={Service[2].title} description={Service[2].description} />
      <Rooms />
      </div>
      <Footer />
    </div>
  );
}

export default Home;