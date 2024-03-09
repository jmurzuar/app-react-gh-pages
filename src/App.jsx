import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Movie } from "./pages/Movie"
import { NavBarComponent } from "./components/NavBar"

function App() {


  return (
    <>
      <NavBarComponent />
      <Routes>
        <Route path="/app-react-gh-pages/" element={<Home />}/>
        <Route path="/app-react-gh-pages/movies" element={<Movie />}/>
        <Route path="/app-react-gh-pages/*" element={<Navigate to='/app-react-gh-pages/'/>} />
        <Route />
      </Routes>
    </>
  )
}

export default App
