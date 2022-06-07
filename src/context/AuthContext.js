import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducers/authReducer";

export const AuthContext = createContext()

const INITIAL_VALUES = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : { logged: false }

export const AuthContextProvider = ({ children }) => {

  const [user, dispatch] = useReducer(reducer, INITIAL_VALUES)
  
  useEffect(() => {
    if ( !user.logged ) return;

    localStorage.setItem('user', JSON.stringify(user) );
  }, [ user ])

  return (
    <AuthContext.Provider value={{ ...user, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}