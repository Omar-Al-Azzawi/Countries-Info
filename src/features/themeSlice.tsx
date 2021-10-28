import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: any = {
    themeColor: '',
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeColor(state, action: PayloadAction<string>) {
            state.themeColor = action.payload
    }
  }
})

export const { changeColor } = themeSlice.actions
export default themeSlice.reducer