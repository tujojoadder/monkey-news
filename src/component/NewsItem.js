import React, { memo } from 'react'

 function NewsItem(props) {
  console.log("Lol")
  return (
   <>

   
<div className="col-sm-12  col-md-4 col-lg-3 my-3 " style={{}}>
      <div className="card mx-3" style={{}} >

        <div 
        style={{display:'flex',
        position:'absolute',
        justifyContent:'center',
        right:0
      }}
        >
        <span  className=" badge rounded-pill bg-danger">{props.source?props.source:"Unknown"}</span>

        </div>




      <img src={props.img?props.img :"https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA19NB0B.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg"} style={{height:"10rem"}} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.title? props.title.slice(0,55) : " "}...</h5>
        <p className="card-text">{props.description? props.description.slice(0,84)+"....." :" "}</p>
        <p ><span className='opacity-75'> By</span> <span> {props.author?props.author:"Unknown"} </span> <span className='opacity-75'> on</span> <span >{new Date(props.date).toGMTString()}</span></p>
        <a href={props.url} target="_blank" className="btn btn-primary ">Read More</a>
        </div>
      </div>
</div>
   
   </>
  )
}
export default memo(NewsItem);