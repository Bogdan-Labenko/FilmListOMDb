import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import { filmListReducer } from "./filmListReducer"

const rootReducer = combineReducers({
    filmList: filmListReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))