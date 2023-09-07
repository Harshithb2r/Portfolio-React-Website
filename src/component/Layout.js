import React, { useState } from 'react'
import Home from '../pages/home/Home'
import './layout.css'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import Menu from './menu/Menu'

const Layout = () => {

    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <>
            <div class="sidebar-section">
                <div className={toggle ? "sidebar-toggle" : "sidebar"}>
                    <div className="sidebar-toggle-icons">
                        <p onClick={handleToggle}>
                            {
                                toggle ? (<AiOutlineDoubleLeft size={34} />) : (<AiOutlineDoubleRight size={34} />)
                            }
                        </p>
                    </div>
                    <Menu toggle={toggle} />
                </div>
                <div className="container">
                    <Home />
                </div>
            </div>
        </>
    )
}

export default Layout
