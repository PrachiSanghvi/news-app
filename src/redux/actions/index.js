import axios from 'axios';
export const NEWS_DATA = "NEWS_DATA";
export const SEARCHED_NEWS_DATA = "SEARCHED_NEWS_DATA";

export const getAllNews = () => {
  // Getting all news data
  return async (dispatch) => {
    try {
      const news = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c94c4bf82af4e18a0ba534482945782");
      dispatch(getNewsData(news.data.articles))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getSearchedNews = (searchData) => {
  // Getting search based news data
  return async (dispatch) => {
    try {
      const news = await axios.get(`https://newsapi.org/v2/everything?q=${searchData}&apiKey=7c94c4bf82af4e18a0ba534482945782`);
      dispatch(searchedNewsData(news.data.articles))
    } catch (error) {
      console.log(error)
    }
  }
}

export const getNewsData = (news) => {
  // Dispatching all news data
  return (dispatch) => {
    dispatch({
      type: NEWS_DATA,
      payload: news

    })
  }
}

// Search data dispatch
export const searchedNewsData = (news) => {
  return (dispatch) => {
    dispatch({
      type: SEARCHED_NEWS_DATA,
      payload: news

    })
  }
}
