import React from 'react';
import banner from '../../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div
            className="hero min-h-screen rounded-3xl"
            style={{
                backgroundImage:
                    `url(${banner})`,
            }}
        >
            <div className="hero-overlay rounded-4xl"></div>
            <div className="hero-content text-neutral-content text-center rounded-4xl">
                <div className="w-[70%]">
                    <h1 className="mb-5 text-5xl font-bold">It avoids subjective claims or exaggeration that might raise red flags legally</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Hero;