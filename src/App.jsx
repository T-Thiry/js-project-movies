import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PopularMovies } from './pages/PopularMovies'
import { NewMovies } from './pages/NewMovies'
import { MovieDetails } from './pages/MovieDetails'
import { Nav } from './components/Nav'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/news" element={<NewMovies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </main>
  )
}