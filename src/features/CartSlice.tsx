import { createSlice } from "@reduxjs/toolkit"

const initialState: any = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems') || '') : [],
    cartTotal: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: any){
            state.cartItems.push(action.payload)
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        removFromCart(state, action: any){
         const nextCartItem =  state.cartItems.filter((cartItem: any) => cartItem.name !== action.payload.name);
         state.cartItems = nextCartItem
         localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },
        cartTotal(state, action: any){
            state.cartTotal = state.cartItems.legth
        }
    }
})

export const { addToCart, removFromCart } = cartSlice.actions 
export default cartSlice.reducer;