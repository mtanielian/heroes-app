import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import queryString from 'query-string'
import HeroesListItem from "../../components/heroes/HeroesListItem"
import { Box, Typography, Grid, TextField, Button, Chip } from "@mui/material"
import { searchHeroe } from "../../utils/heroes"

const SearchPage = () => {
  const [term, setTerm] = useState('')
  const [heroes, setHeroes] = useState([])
  const [noHeroes, setNoHeroes] = useState(false)
  const location = useLocation()
  const { query = '' } = queryString.parse(location.search);

  const loadHero = (query) => {
    setNoHeroes(false)
    const search = searchHeroe(query)
    setHeroes(search)  
    setTerm(query)
  
    if (search.length === 0)
      setNoHeroes(true)
  
    
  }

  const handlerSumbit = (e) => {
    e.preventDefault()
    loadHero(term)
  }

  useEffect(() => {
    if (query.trim() !== '') {
      loadHero(query)
    }
   
  }, [query])

  return (
    <Box>
      <Typography variant="h3" component='h3'>SearchPage</Typography>
      <hr />
      <Grid container spacing={2} sx={{mt: 5}}>
        <Grid item xs={4}>
          <Typography variant="h4" component='h4'>Buscar</Typography>
          <Grid item xs={12} sx={{ borderTop: 1, pt: 2, mr: 5 }}>
            <form onSubmit={handlerSumbit}>
              <TextField 
                label="Heroe" 
                variant="outlined" 
                fullWidth sx={{mb: 2}} 
                value={term}
                onChange={ ({ target }) => setTerm(target.value) }
              />
              <Button type="submit" variant="outlined" fullWidth>Buscar</Button>
            </form>
          </Grid>
        </Grid>
        <Grid item xs={7} >
          <Typography variant="h4" component='h4'>Resultado</Typography>
          <Grid item xs={12} sx={{ borderTop: 1, pt: 2, mr: 5 }}>
            { noHeroes && <Chip label="Busqueda sin resultados" variant="outlined" fullWidth color='warning' /> }
            { heroes.map( h =>  <HeroesListItem key={h.id} heroe={h} />  )}
          </Grid>
        </Grid>
        
      </Grid>


    </Box>
  )
}

export default SearchPage