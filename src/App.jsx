import React from 'react'
import { useState } from 'react'
import Narbar from './Components/NarBar'
import NewsBoard from './Components/NewsBoard'

export default function App(){
  const [category, setCategory] = useState('general')
  return (
    <div>
      <Narbar setCategory = {setCategory}/>
      <NewsBoard category = {category}/>
    </div>
  )
}
