import { useEffect, useState } from "react";
import axios from "axios"
import FilmItem from "./FilmItem";
import "../styles/FilmList.css"

const FilmList = () => {
    const apiKey = "71aaac3b"
    const [filmList, setFilmList] = useState([])
    const findFilms = (title, year, type) => {
        let urlComplete = `https://www.omdbapi.com/?apikey=${apiKey}`
        if(!title) urlComplete += '&s=batman'
        else urlComplete += `&t=${title}`
        if(year){
            urlComplete += `&y=${year}`
        }
        if(type){
            urlComplete += `&t=${type}`
        }
        axios.get(urlComplete)
            .then(res => {
                setFilmList(res.data.Search)
                console.log(res.data.Search);
            })
            .catch(error => console.log(error))
    }
    useEffect(() => findFilms(), [])
    return <div className="list">
        {filmList.map((film) => (
            <FilmItem key={film.imdbID} props={film}/>
        ))}
    </div>;
}
 
export default FilmList;