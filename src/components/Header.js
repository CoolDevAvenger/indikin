import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Header() {
    return (
        <div className='header'>
            <Carousel showThumbs={false}>
                <div className='item'>
                    <img src="/img/1.png" alt="Image 1" />
                    <div className='header-description'>
                        <h5>WELCOMETOINDIKIN____________</h5>
                        <h2>
                            Crafting Visual Stories <br/>
                            with Passion
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus sapien. Proin mattis lectus ut faucibus iaculis. Sed laoreet dolor at orci aliquam, vitae facilisis tellus dignissim.
                        </p>
                        <button>OUR SERVICES</button>
                        <div className='services'>
                            <ul>
                                <li>
                                    <img src='/img/11.svg' alt='film'/>
                                    FILM FUND SERVICE
                                </li>
                                <li>
                                    <img src='/img/12.svg' alt='match'/>
                                    MATCHMAKING SERVICE
                                </li>
                                <li>
                                    <img src='/img/13.svg' alt='fund'/>
                                    FILM FUND SERVICE
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='item'>
                    <img src="/img/1.png" alt="Image 2" />
                    <div className='header-description'>
                        <h5>WELCOMETOINDIKIN____________</h5>
                        <h2>
                            Crafting Visual Stories <br/>
                            with Passion
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus sapien. Proin mattis lectus ut faucibus iaculis. Sed laoreet dolor at orci aliquam, vitae facilisis tellus dignissim.
                        </p>
                        <button>OUR SERVICES</button>
                    </div>
                </div>
                <div className='item'>
                    <img src="/img/1.png" alt="Image 3" />
                    <div className='header-description'>
                        <h5>WELCOMETOINDIKIN____________</h5>
                        <h2>
                            Crafting Visual Stories <br/>
                            with Passion
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus sapien. Proin mattis lectus ut faucibus iaculis. Sed laoreet dolor at orci aliquam, vitae facilisis tellus dignissim.
                        </p>
                        <button>OUR SERVICES</button>
                    </div>
                </div>
            </Carousel>
            <div className='companies'>
                <div className='container'>
                    <ul>
                        <li>
                            <img src='/img/companies/1.svg' alt=''/>
                        </li>
                        <li>
                            <img src='/img/companies/2.svg' alt=''/>
                        </li>
                        <li>
                            <img src='/img/companies/3.svg' alt=''/>
                        </li>
                        <li>
                            <img src='/img/companies/4.svg' alt=''/>
                        </li>
                        <li>
                            <img src='/img/companies/5.svg' alt=''/>
                        </li>
                        <li>
                            <img src='/img/companies/6.svg' alt=''/>
                        </li>
                        <li>
                            <img src='/img/companies/7.svg' alt=''/>
                        </li>
                        <li>
                            <img src='/img/companies/8.svg' alt=''/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}