import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchData } from '../../apiCalls.js'
import LandingPage from '../LandingPage/LandingPage.js'
import Article from '../Article/Article.js'

import { fakeNews } from '../../dummy-data.js'



export default function App() {
  const [news, setNews] = useState([])
  
  useEffect(() => {
    fetchData()
    .then(data => {
      setNews(data.articles)
    })
  }, [])

  function removeSpaces(str) {
    return str.replace(/\s/g, '')
}
  
  return (
    <Routes>
      <Route path='/' element={<LandingPage news={news} removeSpaces={removeSpaces}/>} />
      <Route path='/article' element={<Article news={news} removeSpaces={removeSpaces}/>} />
      <Route path='/:articleId' element={<Article news={news} removeSpaces={removeSpaces}/>} />
    </Routes>
  )
}