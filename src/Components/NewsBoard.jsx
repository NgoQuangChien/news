import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NewsItem from './NewsItem'

export default function NewsBoard({category}) {
    const [articles, setArticles] = useState([])
    
    useEffect(() => {
      const apiKey = import.meta.env.VITE_KEY_API
      const url = 
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}
        `;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setArticles(data.articles)
      })

    },[category])
  return (
    <div>
        <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
        {articles.map((item, index) => (
          <NewsItem 
            key = {index}
            title = {item.title}
            description = {item.description}
            url = {item.url}
            urlToImage = {item.urlToImage}
          />          
        ))}
    </div>
  )
}
