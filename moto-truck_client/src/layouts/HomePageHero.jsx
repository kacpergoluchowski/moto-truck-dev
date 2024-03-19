import React from "react";
import '../app.scss';
import HomePageHeroVideo from "../components/HomePageHeroVideo";
import HomePageHeroHeader from "../components/HomePageHeroHeader";
import HomePageHeroNavbar from "../components/HomePageHeroNavbar";

export default function HomePageHero() {
    return (
        <div className="home_page-hero">
            <HomePageHeroHeader />
            <HomePageHeroNavbar />
            <HomePageHeroVideo />
        </div>
    )
}