import React from 'react'
import './Home.css'
import homeimg from './home.png'

const Home = () => {
    return (
        <>
            <div className="home "name='home'>
                <div className="homeText">
                    <h1>I'm a Full Stack Developer</h1>
                    <p>Working Particularly on React.JS based applications. <br />Also Familiar with Next.JS For the<br /> UI Development<br /><br/>
                    Using Express.JS & MongoDB for Back-end & Database</p>
                </div>
                <div className="img"><img src={homeimg} alt="" /></div>
            </div>

        </>
    )
}

export default Home
