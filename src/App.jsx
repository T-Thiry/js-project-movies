import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PopularMovies } from './pages/PopularMovies'
import { NewMovies } from './pages/NewMovies'
import { MovieDetails } from './pages/MovieDetails'

export const App = () => {
  return (
    <main>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<PopularMovies />} />
            <Route path="/news" element={<NewMovies />} />
            <Route path="/movie:id" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </main>
  )
}