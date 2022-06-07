import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import NavBar from "../navBar/NavBar"

const MainLayout = ({ children }) => {
  const { logged } = useContext(AuthContext)
  if (!logged)
    return <Navigate to='login' />


  return (
    <>
      <NavBar />
      <main style={{
        margin: '80px auto',
        maxWidth: '1440px',
        padding: '0px 30px'
      
      }}>
        {children}
      </main>
    </>
  )
}

export default MainLayout