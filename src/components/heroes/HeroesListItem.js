import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const HeroesListItem = ({ heroe, showMore = true }) => {
  const { id, superhero, alter_ego, characters } = heroe
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={`/assets/heroes/${id}.jpg`}
            alt={superhero}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {superhero}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {alter_ego}
            </Typography>
            {alter_ego !== characters && <Typography variant="body2" color="text.secondary">
              {characters}
            </Typography>}
          </CardContent>
          {showMore &&
            <CardActions>
              <Link to={`/heroe/${id}`} size="small">Ver más</Link>
            </CardActions>
          }
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default HeroesListItem