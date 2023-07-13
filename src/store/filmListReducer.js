const defaultState = []

const SET_FILMS = "SET_FILMS"

export const filmListReducer = (state = defaultState, action) => {
    switch (action.type){
        case SET_FILMS:
            return action.payload.Search
        default: 
            return state
    }
}

export const setFilmListAction = (payload) => {return {type: SET_FILMS, payload}}