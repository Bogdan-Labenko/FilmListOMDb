import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import { filmListReducer } from "./filmListReducer"
import { favouriteFilmsReducer } from "./favouriteFilmsReducer"

const rootReducer = combineReducers({
    filmList: filmListReducer,
    favouriteList: favouriteFilmsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))