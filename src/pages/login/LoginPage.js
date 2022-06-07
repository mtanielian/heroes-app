import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import { actionsTypes } from "../../actionsTypes/types"
import { Button, Grid, TextField, Typography } from "@mui/material"

const LoginPage = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  const { dispatch } = useContext(AuthContext)

  const handlerSumbit = (e) => {
    e.preventDefault()
    dispatch({
      type: actionsTypes.login,
      payload: {
        username,
        email: 'test@test.com'
      }
    })
    
    navigate('/', {
      replace: true
    })

  }

  return (
    <Grid container spacing={2} sx={{mt: 5 , justifyContent: "center"}} >
      <Grid item xs={4}>
        <Typography variant="h4" component='h4' paddingBottom={2} textAlign='center'>Login</Typography>
        <Grid item xs={12} sx={{ borderTop: 1, pt: 5 }}>
          <form onSubmit={handlerSumbit}>
            <TextField
              label="Username" 
              variant="outlined" 
              fullWidth sx={{mb: 2}} 
              value={username}
              onChange={ ({ target }) => setUsername(target.value) }
            />
            <TextField 
              label="Password" 
              variant="outlined" 
              type='password'
              fullWidth sx={{mb: 2}} 
              value={password}
              onChange={ ({ target }) => setPassword(target.value) }
            />
            <Button type="submit" variant="outlined" fullWidth>Ingresar</Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LoginPage