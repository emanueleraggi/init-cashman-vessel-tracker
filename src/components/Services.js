import React, { Component } from 'react'
import {FaLocationArrow, FaShip} from "react-icons/fa"
import {IoMdLocate} from "react-icons/io"
import {MdLocationOn} from "react-icons/md"


import Title from "./Title"

export default class Services extends Component {
state = {
    services: [
        {
            icon: <FaLocationArrow/>,
            title: "GeoLocalization",
            info: "Possibility for geolocalization of boats for research purposes"
        },
        {
            icon: <FaShip/>,
            title: "Project",
            info: "Possibility for geolocalization of boats for research purposes"
        },
        {
            icon: <IoMdLocate/>,
            title: "Localization",
            info: "Possibility for geolocalization of boats for research purposes"
        },
        {
            icon: <MdLocationOn/>,
            title: "Marker",
            info: "Possibility for geolocalization of boats for research purposes"
        }

    ]
}

    render() {
        return (
            <section className="services">
                <Title title="Features" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                    </article>
                    })}
                </div>
            </section>
        )
    }
}
