import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Movies } from './pages/Movies'
import { MovieDetails } from './pages/MovieDetails'
import { Nav } from './components/Nav'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </main>
  )
}