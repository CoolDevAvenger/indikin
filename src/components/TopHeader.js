import React from 'react';

export default function TopHeader() {
    return (
        <div className='top-header'>
            <div className='container'>
                <h2>INDIKIN.</h2>
                <ul>
                    <li className='active'>
                        <a>HOME</a>
                    </li>
                    <li>
                        <a>FUND</a>
                    </li>
                    <li>
                        <a>MATCHMAKING</a>
                    </li>
                    <li>
                        <a>STREAMING</a>
                    </li>
                </ul>
                <div>
                    <button className='wallet'>CONNECTED WALLET</button>
                    <button className='login'>LOGIN</button>
                    <button className='signup'>SIGN UP</button>
                </div>
            </div>
        </div>
    )
}