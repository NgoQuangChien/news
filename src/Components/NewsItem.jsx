import React from 'react'
import image from '../assets/image/news.jpg'

export default function NewsItem({title, description, url, urlToImage}){

    return (
      <div>
        <div className="card bg-dark text-light mb-3 mt-3 px-2 py-2" style={{maxWidth: "345px", minHeight: "400px"}}>
          <img
            src={urlToImage ? urlToImage : image}
            className="card-img-top"
            alt={title}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover"
            }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{
              height: "48px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}>
              {title ? title.slice(0,50) : ""}
            </h5>
            <p className="card-text" style={{
              height: "54px",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}>
              {description ? description.slice(0,90) : "News"}
            </p>
            <a href={url} className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
}
