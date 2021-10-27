import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    items: [],
    status: null
}

const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {

    }
})

export default countrySlice.reducer