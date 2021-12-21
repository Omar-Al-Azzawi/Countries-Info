import React from 'react'

import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

import {  useTheme } from "../../context/context" 

import { removFromCart } from "../../features/CartSlice";

import "./Cart.scss"

function cart() {
    const cart = useSelector!((state: any) => state.cart)
    const dispatch = useDispatch!()
    const { theme } = useTheme!()

    const handleRemoveFromCart = (cartItem: any) => {
        dispatch(removFromCart(cartItem))
    }
    return (
        <div className='cart__container'>
            <h1 className='title'>Countries visited</h1>
            {cart.cartItems.length === 0?(
                <div>
                    <div className='note'>
                      <p>Your list is empty</p>
                    </div>
                </div>
            ) : (
                <div>
                    <div>
                        {cart.cartItems?.map((cartItem: any, idx: any) => (
                            <div key={idx}>
                                <div className='cart__item'>
                                    <div className='cart__item_content'>
                                        <img style={{width: '150px'}} src={cartItem.flag} alt={cartItem.name} />
                                        <h3>{cartItem.name}</h3>
                                    </div>
                                    <div className='btn__container'>
                                         <button style={{backgroundColor: theme}}  onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <Link className='go_back_btn' to="/">
                Go back 
            </Link>
        </div>
    )
}

export default cart
