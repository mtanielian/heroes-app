import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const LoginPage = () => {
  const navigate = useNavigate()
  
  const handlerLogin = () => {
    navigate('/', {
      replace: true
    })
  }

  return (
    <div>
      <h3>LoginPage</h3>
      <hr />
      <Button onClick={handlerLogin}>Login</Button>
    </div>
  )
}

export default LoginPage