import React from 'react'
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Resume.pdf'

const Home = () => {
    return (
        <>
            <div className="container-fluid home-container" id='home'>
                <div className="container home-content">
                    <h2>Hi, I am Harshith Kumar</h2>
                    <h1><Typewriter
                        options={{
                            strings: ['FullStack Web Developer!', 'React-Native Developer!', 'MERN Stack Developer!'],
                            autoStart: true,
                            loop: true,
                        }}
                    /></h1>
                    <div className='home-buttons'>
                        <button className='btn btn-hire'>Hire Me</button>
                        <a className='btn btn-cv' href={Resume} download="Harshith.pdf">My Resume</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
