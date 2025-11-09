"use client"

import { createContext, useContext, useState } from "react";

export const AppContext = createContext({})
export const AppProvider = ({children, ...props}) => {
    const [navSlide, setNavSlide] = useState()

    return <AppContext.Provider value={{navSlide, setNavSlide, ...props}}>{children}</AppContext.Provider>
}
export const AppConsumer = AppContext.Consumer

export function useApp() {
    const store = useContext(AppContext)
    if (!store) {
        throw new Error('useApp must be used within an AppProvider')
    }
    return store
}