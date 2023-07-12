import { useEffect, useState } from "react";
import axios from "axios"
import FilmItem from "./FilmItem";
import "../styles/FilmList.css"

const FilmList = () => {
    const apiKey = "71aaac3b"
    const [filmList, setFilmList] = useState([])
    const [findingStatus, setFindingStatus] = useState(true)

    const findFilms = (title, year, type) => {
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
                    setFindingStatus(false) 
                    return;
                } 
                setFilmList(res.data.Search)
                setFindingStatus(true)
                console.log(res.data);
            })
            .catch(error => console.log(error))
    }
    useEffect(() => findFilms(), [])
    return<>
        <div className="search">
            <h1>Filtrs</h1>
            <input type="text" onChange={e => {
                    findFilms(e.target.value)
                }}
            />
        </div>
        <div className="list">
            {findingStatus === true 
                ? filmList.map((film) => (
                        <FilmItem key={film.imdbID} props={film}/>
                    ))
                : <h1>Films not found</h1>
            }
        </div>
    </> 
    
}
 
export default FilmList;