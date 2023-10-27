import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import HeroData from '../Components/HeroData'
import { useDispatch, useSelector } from 'react-redux'
import { addCat } from '../Store/Slices/CatSlice'

function Home() {
  const [mudalIsOpen , setMudalIsOpen] = useState(false)


  return (
    <>
    <Navbar />
    <HeroData mudalIsOpen={mudalIsOpen} setMudalIsOpen={setMudalIsOpen}/>
    <MudalForAddNewCat mudalIsOpen={mudalIsOpen} setMudalIsOpen={setMudalIsOpen}/>
    </>
  )
}

export default Home

const MudalForAddNewCat = (props) => {
  const {mudalIsOpen ,setMudalIsOpen } = props
  const dispatch = useDispatch();
    const cats = useSelector(state => state.cats.cats)
    const [img , setImg] = useState('');
    const [tags , setTags] = useState('')

    const handleNewCat = (e) => {
        e.preventDefault();
        if(img) {
            const imgurl = URL.createObjectURL(img)
            const tagsInArray = tags.split(' ')
            dispatch(addCat({
                id : cats.length,
                url : imgurl,
                tags : tagsInArray
            }))
        }
        setMudalIsOpen(false)
    }
    return (
<div id="popup-modal" tabIndex="-1" className={`fixed flex items-center justify-center overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full ${mudalIsOpen ? '' : 'hidden'}`}>

    <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-gray-300 py-5 rounded-lg shadow dark:bg-gray-700">
            <button onClick={() => setMudalIsOpen(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
                <span className="sr-only">Close modal</span>
            </button>
            <div className=' w-full flex justify-center items-center'>
        <form onSubmit={handleNewCat} className=' max-w-2xl mx-auto px-5'>
            <h1 className=' py-3 text-center text-3xl font-bold text-blue-500'>Add New Cat</h1>
            <div className='w-full flex flex-col space-y-3 justify-center items-center'>
            <input type="file" accept='image/*' onChange={(e) => setImg(e.target.files[0])}/>
            <br />
            <input type="text" placeholder='Add Tags....' className='border-b outline-none px-2 py-1.5 text-lg' value={tags} onChange={(e) => setTags(e.target.value)}/>
            <button type='submit' className="text-white md:text-xl bg-purple-800 px-4 md:py-2  py-1 rounded-lg hover:bg-purple-600 transition-colors duration-300  mx-auto block">
          Upload
        </button>
            </div>
        </form>
    </div>
        </div>
    </div>
</div>

  )
}

