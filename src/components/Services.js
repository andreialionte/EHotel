import React from 'react'
import './Banner.css'

const Services = (props) => {
    return (
        <div className="services-column" >
        <h3 className="column">{props.title}</h3>
        <p className="column">{props.description}</p>
        </div>
    )
}

export default Services