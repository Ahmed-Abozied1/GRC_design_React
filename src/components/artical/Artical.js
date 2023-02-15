import React from 'react'
import "./artical.css"
const Artical = ({imgUrl}) => {
  return (
    <div className='gpt3__blog__container_artical'>


<div className='gpt3__blog__container_artical_image'>
  <img src={imgUrl} alt="BlogImage" />
</div>
    </div>
  )
}

export default Artical