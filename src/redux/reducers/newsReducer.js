import { NEWS_DATA,SEARCHED_NEWS_DATA } from "../actions";

// News all data and search data reducer
const newsReducer = (state = [],action) => {
  switch (action.type) {
    case NEWS_DATA:
      return [ action.payload]
      case SEARCHED_NEWS_DATA:
        return [ action.payload]
    default:
      return state;
  }
}

export default newsReducer