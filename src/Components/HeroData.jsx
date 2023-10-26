import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { catApiData } from '../Store/Slices/CatSlice'

function HeroData() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(catApiData())
    }, [])
    
    const cats = useSelector(state => state.cats.cats)
    console.log(cats)
    
  return (
    <>
    <h1>Hello Word</h1>
    </>
  )
}

export default HeroData