import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

import VesselContainer from "../components/VesselContainer";

const Vessels = () => {
    return (
    <>
    <Hero hero="roomsHero" >
        <Banner title="vessel">
            <Link to="/" className="btn-primary">
                return home
            </Link>
        </Banner>
    </Hero>
    <VesselContainer />
    </>
    )
};

export default Vessels;