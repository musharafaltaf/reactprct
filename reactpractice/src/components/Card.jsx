import React from 'react'
import {Bookmark,} from 'lucide-react'

const Card = (props) => {
  console.log(props.logo)
  return (
    <div className='parent'>
      <div className='card'>
        <div className="top">
          <img src={props.logo} alt="" />
          <button>save <Bookmark size={15}/> </button>
        </div>
        <div className="center">
          <h2>{props.company} <span>{props.postedDate}</span></h2>
          <h1>{props.title}</h1>
          <div className='tag'>
            <h3>{props.tag}</h3>
            <h3>{props.experience}</h3>
          </div>
        </div>
        <div className="bottom">
          <div >
            <h1>{props.salary}</h1>
            <span>{props.location}</span>
          </div>
          <button>Apply now</button>
        </div>
      </div>
      
    </div>
  )
}

export default Card
