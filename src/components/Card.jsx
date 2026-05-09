import React from 'react'

const Card = (props) => {

   
    
  return (
    <div className='transition duration-300 hover:scale-105 ease-in-out hover:shadow-2xl'>
      <a href={props.elem.url} target='_blank' >
        <div className='bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/10'>
        <div className='h-40 w-44 overflow-hidden rounded-xl'>
      <img className='h-full w-full object-cover transition duration-500 hover:scale-110' src={props.elem.download_url} alt="" />
    </div>
    <h2 className='font-bold text-lg'>{props.elem.author}</h2>

    <p className='text-xs text-gray-400'>
          Photographer
        </p>

    </div>
      </a>
    </div>
  )
}

export default Card
