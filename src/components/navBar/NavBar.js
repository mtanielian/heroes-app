import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { actionsTypes } from '../../actionsTypes/types'
import { AuthContext } from '../../context/AuthContext'
import './navbar.css'

const NavBar = () => {
    const navigate = useNavigate()
    const { dispatch, username } = useContext(AuthContext)
    const handlerLogout = () => {
        dispatch({
            type: actionsTypes.logout
        })
        localStorage.clear()
        navigate('/login', {
            replace: true
        })
    }


    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>Heroes |</Typography>
                <Typography sx={{ ml: 0.5 }}>App</Typography>           
                <Box flex={ 1 } />
                <Box className="fadeIn">
                    <NavLink 
                        to="/marvel"
                       className={ ({ isActive }) => isActive && 'activeLink' }
                    >
                        <Button sx={{color: 'white'}}>
                            Marvel
                        </Button>
                    </NavLink>
                    <NavLink 
                        to="/dc"
                        className={ ({ isActive }) => isActive && 'activeLink' }
                    >
                    <Button sx={{color: 'white'}}>DC</Button>
                    </NavLink>
                    <NavLink 
                        to="/search"
                        className={ ({ isActive }) => isActive && 'activeLink' }
                    >
                        <Button sx={{color: 'white'}}>Buscar</Button>                   
                    </NavLink>
                </Box>
                <Box flex={ 1 } />
                {username && <Typography variant='h6' marginRight={5}>{username}</Typography>}
                <Button sx={{color: 'white'}} onClick={handlerLogout}>
                    Logout
                </Button>
                
            </Toolbar>
        </AppBar>
    )
}

export default NavBar
