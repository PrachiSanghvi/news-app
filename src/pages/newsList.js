import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import CustomCard from '../components/CustomCard';
import { getAllNews } from '../redux/actions';

const NewsList = () => {
  const dispatch = useDispatch()

  // Getting News data from api on load
  useEffect(() => {
    dispatch(getAllNews())
  }, [])

  return (
    <div>
      {/* Made reusable card for showing news data */}
        <CustomCard />
    </div>
  )
}

export default NewsList