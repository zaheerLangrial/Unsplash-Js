import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrevirewCat() {
    const [Orignal , setOrignal] = useState(false)
    const [small , setsmall] = useState(false)
    const [madium , setMadium] = useState(false)
    const [large , setLarge] = useState(false)

    const cats = useSelector(state => state.cats.cats)
    const {id} = useParams()
    const cat = cats.find((cat) => cat.id == id)
  return (
    <div className=' w-full'>
        <h1 className='text-4xl text-blue-500 text-center font-bold py-3'>Preview Picture</h1>
        <hr />
        <Link to={'/'}>
        <button
        className="text-white md:text-xl my-3 bg-purple-800 px-4 md:py-2 py-1 rounded-lg hover:bg-purple-600 transition-colors duration-300 mx-auto block"
      >
        Back
      </button>
      </Link>
        <div className='flex space-x-3 justify-center py-3'>
          <button onClick={() => setOrignal(!Orignal)} className='px-3 py-1.5 bg-gray-500 text-white'>Orignal</button>
          <button onClick={() => setsmall(!small)} className='px-3 py-1.5 bg-gray-500 text-white'>Small</button>
          <button onClick={() => setMadium(!madium)} className='px-3 py-1.5 bg-gray-500 text-white'>Mudium</button>
          <button onClick={() => setLarge(!large)} className='px-3 py-1.5 bg-gray-500 text-white'>Large</button>
        </div>

        <div className={`w-full flex justify-center ${Orignal ? 'hidden' : ''}`}>
        <img src={cat.url} alt="Cat Image which you selected"/>
        </div>

        <div className={`w-full flex justify-center ${small ? '' : 'hidden'}`}>
        <img src={cat.url} width={300} height={300} alt="Cat Image which you selected"/>
        </div>

        <div className={`w-full flex justify-center ${madium ? '' : 'hidden'}`}>
        <img src={cat.url} width={700} height={800} alt="Cat Image which you selected"/>
        </div>

        <div className={`w-full flex justify-center ${large ? '' : 'hidden'}`}>
        <img src={cat.url} width={1440} alt="Cat Image which you selected"/>
        </div>

    </div>
  )
}

export default PrevirewCat