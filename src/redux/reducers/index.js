import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
// Combining all reducer below and passing it to store
const reducer = combineReducers({
  newsList :  newsReducer
})

export default reducer;