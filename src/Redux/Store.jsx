import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import quizReducer from "./Reducer";

 export const store = createStoreHook(quizReducer,applyMiddleware(thunk));

export default store;