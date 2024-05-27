import React from 'react'

export default function CricketItem(props) {



  return (
    
 

<>
<div className="col-4 my-3">
      <div className="card" style={{"width": "18rem"}}>
      <img src={props.img} style={{height:"10rem"}} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.title.slice(0,35)}.....</h5>
        <p className="card-text">{props.discription.slice(0,77)}.....</p>
        <a href={props.newsurl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
</div>
</>






  )
}
