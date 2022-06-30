import React from 'react'
import HomeBG from '../asset/3e78e80.mp4';
import Button from '../component/paimonbtn'

const Landing = () => {
    return(
        <div className='wrapper'>
            <div className='video-container'>
                <video src={HomeBG} autoPlay loop muted/>
                <div className="content-landing">
                    <div className="centerPaimon">
                        <Button/>
                        <h3>CLICK ON PAIMON TO START</h3>
                    </div>
                    <div className='disclaimer'>
                        THIS IS A FAN-MADE SITE FOR A SCHOOL PROJECT. NO INTENDED CLAIMS TO ANY RIGHTS BELONGING TO THE
                        ORIGINAL ARTIST OF THE ARTWORKS.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
