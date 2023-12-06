import React from 'react'

import StreamCard from './StreamCard'
import StreamInfoItem from './StreamInfoItem'

export default function Stream() {
    return (
        <div className='stream'>
            <div className='container'>
                <h2>STREAMING AUDIENCES</h2>
                <div className='stream-container'>
                    <h5>STREAMING AUDIENCES_________</h5>
                    <div className='row'>
                        <div className='col-8'>
                            <div className='row mb-4'>
                                <StreamCard img="img/stream/1.png" author="Opprenheimer 1"/>
                                <StreamCard img="img/stream/2.png" author="John Wick"/>
                                <StreamCard img="img/stream/3.png" author="Creator"/>
                                <StreamCard img="img/stream/4.png" author="Oppenheimer 2"/>
                            </div>
                            <div className='row mb-4'>
                                <StreamCard img="img/stream/5.png" author="Gatman"/>
                                <StreamCard img="img/stream/6.png" author="Kho Gaye Hum Kahan"/>
                                <StreamCard img="img/stream/7.png" author="Smile"/>
                                <StreamCard img="img/stream/8.png" author="X"/>
                            </div>
                            <div className='row'>
                                <StreamCard img="img/stream/9.png" author="Bloodshot"/>
                                <StreamCard img="img/stream/10.png" author="Prey"/>
                                <StreamCard img="img/stream/11.png" author="Harry Potter"/>
                                <StreamCard img="img/stream/12.png" author="Tufang"/>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='stream-ad'>
                                <img src='img/stream/ad.png' alt='ad'/>
                                <div className='stream-ad-info'>
                                    <h6>Spotlight Celebrities</h6>
                                    <ul>
                                        <StreamInfoItem name="PETER SPIDER" job="Actor"/>
                                        <StreamInfoItem name="THOMAS MANE" job="Actor"/>
                                        <StreamInfoItem name="HELENA JAMES" job="Actor"/>
                                        <StreamInfoItem name="DIANA ANGEL" job="Actor"/>
                                        <StreamInfoItem name="TRESPACITO" job="Actor"/>
                                        <StreamInfoItem name="ADAM SIMS" job="Actor"/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='stream-view'>
                    <button>VIEW MORE</button>
                </div>
            </div>
        </div>
    )
}