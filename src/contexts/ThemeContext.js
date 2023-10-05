import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'

export const ThemeContext = createContext()
export const InsuranceCaseStudyContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = {theme, drawerOpen, setHandleDrawer }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}

function InsuranceCaseStudyThemeContextProvider(props) {
    const [InsuranceCaseStudyTheme, setTheme] = useState(themeData.insuranceCaseStudyTheme)
    const [drawerOpen, setDrawerOpen] = useState(false)

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    const value = {InsuranceCaseStudyTheme, drawerOpen, setHandleDrawer}
    return (
        <InsuranceCaseStudyContext.Provider value={value}>
            {props.children}
        </InsuranceCaseStudyContext.Provider>
    )
}



export default ThemeContextProvider
export {InsuranceCaseStudyThemeContextProvider}
