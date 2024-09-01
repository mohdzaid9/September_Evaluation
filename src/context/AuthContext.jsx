import { Children, createContext, useContext, useState } from "react";
// import { createContext } from "react";


const AuthContext = createContext();

export const AuthProvider = ({Children}) =>{
    const [user ,setUser] = useState()

    const login = (userInformation)=>{
        setUser(userInformation)
    }

    const logout = () =>{
        setUser()
    }

    return (
        <AuthContext.Provider value={{user , login ,logout}}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>useContext(AuthContext)

export default AuthProvider

