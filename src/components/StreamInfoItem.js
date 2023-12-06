import React from 'react'

export default function StreamInfoItem({name, job}) {
    return (
        <li>
            <img src='img/stream/avatar.png'/>
            <div className='stream-ad-description'>
                <div>{name}</div>
                <p>{job}</p>
            </div>
        </li>
    )
}