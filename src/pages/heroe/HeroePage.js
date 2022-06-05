import { Navigate, useParams } from "react-router-dom"
import HeroeDetail from "../../components/heroes/HeroeDetail"
import { getHeroeById } from "../../utils/heroes"

const HeroePage = () => {
  const { id } = useParams()
  const heroe = getHeroeById(id)
  
  if (!heroe) {
    return <Navigate to='/' />
  }

  return (
    <div>
     <h1>HeroePage</h1>
     <hr />
     <HeroeDetail heroe={heroe} />
    </div>
  )
}

export default HeroePage