import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "../components/layouts/MainLayout"
import DcPage from "../pages/dc/DcPage"
import HeroePage from "../pages/heroe/HeroePage"
import LoginPage from "../pages/login/LoginPage"
import MarvelPage from "../pages/marvel/MarvelPage"
import SearchPage from "../pages/search/SearchPage"


const AppRouter = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout><MarvelPage /></MainLayout>} />
        <Route path="/marvel" element={<MainLayout><MarvelPage /></MainLayout>} />
        <Route path="/dc" element={<MainLayout><DcPage /></MainLayout>} />
        <Route path="/search" element={<MainLayout><SearchPage /></MainLayout>} />
        <Route path="/heroe/:id" element={<MainLayout><HeroePage /></MainLayout>} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={<MainLayout><MarvelPage /></MainLayout>} />
      </Routes>
    </BrowserRouter>

    )
}

export default AppRouter



