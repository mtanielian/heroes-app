import { Grid } from '@mui/material'
import React from 'react'
import { getHeroesByPublisher } from '../../utils/heroes'
import HeroesListItem from './HeroesListItem'

const HeroesList = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher)
  return (
    <div>
        <h1>HeroesList - {publisher}</h1>
        <Grid container spacing={2} className='animate__animated animate__fadeIn'>
          { heroes.map( h =>  <HeroesListItem key={h.id} heroe={h} />  )}
        </Grid>
    </div>
  )
}

export default HeroesList