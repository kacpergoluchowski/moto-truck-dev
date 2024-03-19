import React from "react";
import '../app.scss';
import videoBg from '../assets/videos/man tgm 13.290 hero-bg.mp4';

export default function HomePageHeroVideo() {
    return (
        <div className="home_page-hero-video">
            <video src = {videoBg} autoPlay muted loop /> 
        </div>
    )
}