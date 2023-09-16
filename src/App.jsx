import MovieDetails from './components/MovieDetails' 
import SearchResult from './components/SearchResult'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route  path='/' element={<HomePage />}/>
        <Route  path='movies/:id' element={<MovieDetails />}/>
        <Route  path='/searchresult' element={<SearchResult />}/>
      </Route>
    )
  )
  return (
    < >
      <RouterProvider router={router}/>
     
    </>
  )
}

export default App
