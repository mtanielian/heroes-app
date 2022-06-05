import NavBar from "../navBar/NavBar"

const MainLayout = ({ children }) => {
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