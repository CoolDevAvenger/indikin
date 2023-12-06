import React from 'react'

export default function StreamCard({img, author}) {
    return (
        <div className='col-3'>
            <div className='stream-card'>
                <img src={img} alt={img}/>
                <h6>{author}</h6>
            </div>
        </div>
    )
}