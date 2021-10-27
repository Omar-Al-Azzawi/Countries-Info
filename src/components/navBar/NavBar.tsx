import React from 'react'
import { Link } from "react-router-dom"
import { RiSuitcaseLine } from "react-icons/ri"

import "./NavBar.scss"

export interface Props{
    placeholder: string
    handleChange: (input : React.ChangeEvent<HTMLInputElement>) => void, 
}

function NavBar(props: Props) {

    return (
        <header className='header'>
            <div className='serach_container'>
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
            </div>
       </header>
    )
}

export default NavBar