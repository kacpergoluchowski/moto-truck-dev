import React from "react";
import '../app.scss';
import mtIcon from '../assets/images/mt-icon.png';

export default function HomePageHeroNavbar() {
    return (
        <nav className="home_page-hero-navbar">
            <p> O FIRMIE </p>
            <p> OFERTA </p>
            <p> GALERIA </p>
            <img src = {mtIcon} alt = 'logo mototruck' />
            <p> KONTAKT </p>
            <p> KONFIGURATOR </p>
            <p> WIĘCEJ </p>
        </nav>
    )
}