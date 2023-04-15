import React, { useEffect, useState } from 'react'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import CardDialog from './CardDialog'
import { getAllNews, getSearchedNews } from '../redux/actions'
const CustomCard = () => {

  // Using MUI & bootstrap card for showing news in a grid format
  const dispatch = useDispatch();
  const news = useSelector(state => state.newsList[0])
  const [open, setOpen] = useState(false)
  const [popupNewsData, setPopupNewsData] = useState([])
  const [search, setSearch] = useState('')

  // On particular news click showing that news data in popup
  const handleNewsClick = (newsName) => {
    const currentNews = news.find(findNews => findNews.source.name === newsName)
    setPopupNewsData(currentNews)
    setOpen(true)
  }

  // On search data changing search state
  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  // On search state change we are replacing current data with searched data
  useEffect(() => {
    if(search === "") {
      // if search result is blank then showing all news data
      dispatch(getAllNews())
    } else {
      // Using debouncing while searching data just for minimizing api call and calling api after user ends searching
      const getNewsData = setTimeout(() => {
        // sending search data to search api for getting search based data
        dispatch(getSearchedNews(search));
      }, 2000);
      // Clearing settimeout when we get searched Data.
      return () => clearTimeout(getNewsData)
    }
  }, [dispatch, search])

  // If popup showing data is not there,we return it.
  if (!popupNewsData) return;

  return (
    <div className="container">
      <h1 className="news-title">Latest News </h1>
      <div className='row'>
        <input className="search-input" type="text" placeholder="Search here.." onChange={(e) => handleSearch(e)} />
        {news?.map((newsData, index) => {
          return (
            <div className="col-md-4 news-card-data" key={index}>
              <Button variant="outlined" onClick={() => handleNewsClick(newsData.source.name)}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={newsData?.urlToImage}
                    title={newsData?.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {newsData?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {newsData.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Button>

              <CardDialog popupNewsData={popupNewsData} open={open} setOpen={setOpen} />
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default CustomCard