import React from 'react'
import image from '../assets/news.jpg'

export default function NewsItem({title, description, url, urlToImage}){

    return (
      <div>
        <div className="card bg-dark text-light col-md-4 mb-3 my-3 mx-3 px-2 py-2" style={{maxWidth: "345px"}}>
          <img src={urlToImage?urlToImage:image} style={{height:"200px", width:"325px"}} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"News"}</p>
            <a href={url} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
}
