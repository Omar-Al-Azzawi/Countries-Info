import { createContext, useContext } from 'react'

export enum Theme {
    Purple = '#D2B4DE',
    Red = '#E74C3C',
    Green = '#58D68D',
    Blue ='#589FD6'
}

export type ThemeContextType = {
    theme: Theme,
    setTheme: (Theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.Purple,
    setTheme: (theme) => console.log('no theme'),
  })
  export const useTheme = () => useContext(ThemeContext)