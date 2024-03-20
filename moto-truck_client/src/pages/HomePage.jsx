import React from "react";
import '../app.scss';
import HomePageHero from "../layouts/HomePageHero";
import HomePageOffer from "../layouts/HomePageOffer";
 
export default function HomePage() {

    window.addEventListener('resize', () => {
        console.log('width: ', window.innerWidth)
        console.log('height: ', window.innerHeight)
    })

    return (
        <div className="home_page">
            <HomePageHero />
            <HomePageOffer />
        </div>
    )
}