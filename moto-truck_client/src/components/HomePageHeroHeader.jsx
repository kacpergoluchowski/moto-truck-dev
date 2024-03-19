import React from "react";
import '../app.scss';
import phoneIcon from '../assets/images/phone-icon.png';

export default function HomePageHeroHeader() {
    return (
        <header className="home_page-hero-header">
            <p> POTRZEBUJESZ POMOCY? NAPISZ DO NAS! </p>
            <p className="phone_number"> <img src = {phoneIcon} /> +48 41 361 33 13 </p>
        </header>
    )
}