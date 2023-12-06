import React from 'react';

export default function FundPool() {
    return (
        <div className='fund-pool'>
            <div className='container'>
                <h2>Film fund pool</h2>
                <div className='row'>
                    <div className='col-5'>
                        <h5>FILM FUND POOL.______</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus sapien. Proin mattis lectus ut faucibus iaculis. Sed laoreet dolor at orci aliquam, vitae facilisis tellus dignissim.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu lectus sapien. Proin mattis lectus ut faucibus iaculis. Sed laoreet dolor at orci aliquam, vitae facilisis tellus dignissim.</p>
                        <button>LEARN MORE</button>
                    </div>
                    <div className='col-7 picture'>
                        <div className='first'></div>
                        <img src='/img/fund.png' alt=''/>
                        <div className='second'></div>
                    </div>    
                </div>
            </div>
        </div>
    )
}