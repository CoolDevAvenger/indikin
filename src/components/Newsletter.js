import React from 'react';

export default function Newsletter() {
    return (
        <div className='news'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 d-flex align-items-center'>
                        <div className='slogan'>
                            Let's make great things together!
                        </div>
                    </div>
                    <div className='col-6 text-end'>
                        <h5>Newsletter</h5>
                        <p>Subscribe to Our Newsletter</p>
                        <div>
                            <input placeholder='Your Email Address'/>
                            <button>SBUSCRIBE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}