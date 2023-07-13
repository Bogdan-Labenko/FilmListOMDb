const defaultState = {
    films: []
}

const ADD_FAVOURITE_FILM = 'ADD_FAVOURITE_FILM'
const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE'

export const favouriteFilmsReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_FAVOURITE_FILM: 
            return {...state, films: [...state.films, action.payload]}
        case REMOVE_FROM_FAVOURITE: 
            console.log({...state, films: [...state.films.filter(film => film !== action.payload)]});
            return {...state, films: [...state.films.filter(film => film !== action.payload)]}
        default: 
            return state
    }
}

export const addNewFavouriteFilmAction = (payload) => {return {type: ADD_FAVOURITE_FILM, payload}}
export const removeFromFavouriteAction = (payload) => {return {type: REMOVE_FROM_FAVOURITE, payload}}