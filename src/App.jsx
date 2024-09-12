import Card from "./components/Card/Card";
import Details from "./components/Details/Details";
import HomeAnime from "./components/Home/HomeAnime"
import { Nav } from "./components/Navbar/Nav"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Search } from "./components/Search/Search";
import Info from "./components/[id]/Info";
import { AnimeWatch } from "./components/AnimeWatch/AnimeWatch";

function App() {


  return (
    <Router>
      <Routes>
        <Route
          element={
            <>
              <Nav />
            </>
          }

        >
        </Route>
        <Route path="/" element={<HomeAnime />} />
        <Route path="/:id" element={<Info />} />
        <Route path="/search/:id" element={<Search />} />
        <Route path="/:id/:episode" element={<AnimeWatch />} />

      </Routes>
    </Router>
  )
}

export default App
