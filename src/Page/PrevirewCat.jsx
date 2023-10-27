import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'

function PrevirewCat() {
    const cats = useSelector(state => state.cats.cats)
    console.log(cats)
    const {id} = useParams()
    const cat = cats.find((cat) => cat.id == id)
    console.log(cat)
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
        <div className=' w-full flex justify-center'>
        <img src={cat.url} width={1440} alt="Cat Image which you selected"/>
        </div>

    </div>
  )
}

export default PrevirewCat