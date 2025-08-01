import React from "react";
import yourLogo from "../About us Assets/ace logo.jpg";

const AboutUs = () => {
    return (
        <div className="w-full bg-white font-poppins px-5 py-10 md:py-20 max-w-screen-xl mx-auto border-2 border-black rounded-md flex flex-col md:flex-row items-center gap-10">

            {/* Text Content */}
            <div className="flex-1 min-w-[280px] max-w-xl text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">
                    About Ace Softwares
                </h1>
                <p className="text-gray-800 text-base leading-relaxed">
                    Ace Software is a subgroup of Ace The Academia with a vision to empower South Africans to transform their lives through Technology and education.
                    We aim to build robust and innovative software solutions for Businesses and also every citizen of South Africa to empower them and to drive digital transformation in South Africa fast.
                </p>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 w-full max-w-sm text-center">
                <img
                    src={yourLogo}
                    alt="Ace the Academia Logo"
                    className="w-full h-auto"
                    onError={(e) => (e.target.style.display = "none")}
                />
            </div>
        </div>
    );
};

export default AboutUs;
