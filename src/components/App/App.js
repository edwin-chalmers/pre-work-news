import { Route, Routes } from 'react-router-dom'
import LandingPage from '../LandingPage/LandingPage.js'
import Article from '../Article/Article.js'



export default function App() {
  
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/article' element={<Article />} />
      {/* <Route path='/:movieId' element={<Modal formatDate={formatDate} formatGenre={formatGenre} />} /> */}
      {/* <Route path='/play' element={<GamePage />} />
      <Route path='/error' element={<Error />} />
      <Route path='*' element={<Error error='*'/>} /> */}
    </Routes>
  )
}