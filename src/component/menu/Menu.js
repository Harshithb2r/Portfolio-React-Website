import React from 'react'
import './menu.css'
import img1 from '../../images/pp.jpg'
import { AiFillCaretRight } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Menu = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <div className="navbar-profile-pic">
                        <img src={img1} />
                    </div>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className='nav-link'>
                                <Link to='home' offset={-100} spy={true}>
                                    <AiFillCaretRight />
                                    Home
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className='nav-link'>
                                <Link to='about' offset={-100} spy={true}>
                                    <AiFillCaretRight />
                                    About
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className='nav-link'>
                                <Link to='techstack'>
                                    <AiFillCaretRight />
                                    Texh Stack
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className='nav-link'>
                                <Link to='projects'>
                                    <AiFillCaretRight />
                                    Projects
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className='nav-link'>
                                <Link to='education'>
                                    <AiFillCaretRight />
                                    Education
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className='nav-link'>
                                <Link to='contact'>
                                    <AiFillCaretRight />
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )
                :
                (<h2></h2>)}
        </>
    )
}

export default Menu
