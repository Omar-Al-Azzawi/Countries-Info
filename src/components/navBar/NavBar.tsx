import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { RiSuitcaseLine } from "react-icons/ri"
import { FaBars } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io"

import { Theme, useTheme } from "../../context/context"

import "./NavBar.scss"
import CartItem from '../cart/CartItem'

export interface Props{
    placeholder: string
    handleChange: (input : React.ChangeEvent<HTMLInputElement>) => void, 
}

function NavBar(props: Props) {
    const [sideBar, setSideBar] = useState(false)
    const { theme, setTheme } = useTheme()

    const showSideBar = () => {
        setSideBar(!sideBar)
    }
    return (
        <header style={{backgroundColor: theme}} className='header'>
            <div className='serach_container'>
                <div className='side__bar'>
                    <Link className='side__bar__menu-btn' to="#">
                         <FaBars onClick={showSideBar }/>
                    </Link>
                </div>
                <nav className={sideBar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-item'>
                        <li className='nav-menu-toggle'>
                           <span>Switch Theme </span>
                             <Link className='side__bar__menu-close-btn' to="#"> 
                               <IoIosArrowBack onClick={showSideBar }/>
                            </Link> 
                        </li>
                        <li className='nav-item purple' onClick={() => setTheme(Theme.Purple)}>P <span>Purple</span> </li>
                        <li className='nav-item blue' onClick={() => setTheme(Theme.Blue)}>B <span>Blue</span> </li>
                        <li className='nav-item green' onClick={() => setTheme(Theme.Green)}>G <span>Green</span> </li>
                        <li className='nav-item red' onClick={() => setTheme(Theme.Red)}>R <span>Red</span> </li>
                        <span></span>
                    </ul>
                </nav>
                <h1>Countries information 🌍</h1>
                <input
                placeholder={props.placeholder}
                onChange={props.handleChange}
                />
            </div>
            <div className='cart_container'>
                <Link to="/cart">
                  <RiSuitcaseLine />
                </Link>
                <span>{CartItem.length}</span>
            </div>
       </header>
    )
}

export default NavBar