import React from 'react';
import Slider from 'react-slick';

export default function MatchMaking() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    return (
        <div className='match-making'>
            <div className='container'>
                <h2>MATCHMAKING</h2>
                <h5>_____MATCHMAKING_____</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus sapien.</p>

                <div className='match-slider'>
                    <Slider {...settings}>
                        <div>
                            <img src="/img/slides/1.png" alt="Image 1" />
                            <div className="slider-description">
                                <h6>Will Joshua</h6>
                                <p>EXECUTIVE PRODUCER</p>
                            </div>
                        </div>
                        <div>
                            <img src="/img/slides/2.png" alt="Image 2" />
                            <div className="slider-description">
                                <h6>Anne Doe</h6>
                                <p>EXECUTIVE PRODUCER</p>
                            </div>
                        </div>
                        <div>
                            <img src="/img/slides/3.png" alt="Image 3" />
                            <div className="slider-description">
                                <h6>Mark William</h6>
                                <p>EXECUTIVE PRODUCER</p>
                            </div>
                        </div>
                        <div>
                            <img src="/img/slides/4.png" alt="Image 4" />
                            <div className="slider-description">
                                <h6>William Thomas</h6>
                                <p>EXECUTIVE PRODUCER</p>
                            </div>
                        </div>
                        <div>
                            <img src="/img/slides/1.png" alt="Image 5" />
                            <div className="slider-description">
                                <h6>Will Joshua</h6>
                                <p>EXECUTIVE PRODUCER</p>
                            </div>
                        </div>
                    </Slider>
                </div>
                
            </div>
        </div>
    )
}