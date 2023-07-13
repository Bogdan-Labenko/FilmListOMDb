import { setFilmListAction } from "../store/filmListReducer"
import axios from "axios"

const apiKey = "71aaac3b"

export const fetchFilms = (title, year, type) => {
    return dispatch => {
        let urlComplete = `https://www.omdbapi.com/?apikey=${apiKey}`
        if(!title) urlComplete += '&s=batman'
        else urlComplete += `&s=${title}`
        if(year){
            urlComplete += `&y=${year}`
        }
        if(type){
            urlComplete += `&type=${type}`
        }
        axios.get(urlComplete)
        .then(res => {
            if(res.data.Error === 'Too many results.') return
            if(res.data.Error === 'Movie not found!')
            {
                return;
            } 
            dispatch(setFilmListAction(res.data))
        })
        .catch(error => console.log(error))
    }
}