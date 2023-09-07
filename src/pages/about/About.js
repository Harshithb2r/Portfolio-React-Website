import React from 'react'
import './about.css'
import img1 from '../../images/pp.jpg'

const About = () => {
    return (
        <>
            <div class="about" id='about'>
                <div class="row">
                    <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                        <img src={img1} />
                    </div>
                    <div class="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-con"><h1>About Me</h1>
                        <p>hi, I'm a student who's super excited about web development and looking for part-time jobs. If you need someone
                            with skills in the MERN stack, React Native, and Angular, then please contact me!
                            During my studies, I've had the chance to dive deep into the world of Web and App development.<br></br>I've learned how to create
                            awesome web applications using all the latest frameworks and technologies. With the MERN stack and Angular, I
                            can build powerful and scalable solutions, while React Native help me craft cool mobile apps that work on multiple
                            platforms.
                            But it's not just about the technical stuff. I'm a hard worker and love working with others. I thrive in fast-paced
                            environments and enjoy collaborating with diverse teams to come up with innovative solutions that make clients
                            happy.<br />
                            Right now, I'm on the hunt for part-time opportunities where I can put my skills to good use and continue growing
                            as a developer. If you're looking for a dedicated web developer who's eager to learn and deliver top-notch results,
                            let's connect!
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
