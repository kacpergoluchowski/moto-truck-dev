import React from "react";
import '../app.scss';
import HomePageHero from "../layouts/HomePageHero";
import HomePageAbout from "../layouts/HomePageAbout";

export default function HomePage() {
    return (
        <div className="home_page">
            <HomePageHero />
            <HomePageAbout />
        </div>
    )
}