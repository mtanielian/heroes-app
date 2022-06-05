import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"


const HeroeDetail = ({ heroe }) => {
  const navigate = useNavigate()
  const { id, superhero, publisher, alter_ego, first_appearance, characters } = heroe

  const handlerGoBack = () => {
    navigate( -1 )
  }

  return (
    <Card sx={{ display: 'flex', boxShadow: "none" }}>
       <CardMedia
        component="img"
         image={`/assets/heroes/${id}.jpg`}
        alt={superhero}
        style={{width: '25%'}}
        className='animate__animated animate__fadeInLeft'
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h3">
           {superhero}
          </Typography>
          <Typography variant="subtitle1" color="primary" component="div" sx={{mt: 2}}>
            <b>Alter ego:</b> {alter_ego}
          </Typography>
          <Typography variant="subtitle1" color="primary" component="div">
            <b>Publisher:</b> {publisher}
          </Typography>
          <Typography variant="subtitle1" color="primary" component="div">
            <b>First Appearance:</b> {first_appearance}
          </Typography>
          <Typography variant="subtitle1" color="primary" component="div" sx={{mt: 5}}>
            <b>Characters:</b>
            <p>{characters}</p>
          </Typography>
          <Button sx={{mt:2}} variant='outlined' onClick={ handlerGoBack }>Go back</Button>
        </CardContent>
      </Box>
    </Card>
  )
}

export default HeroeDetail