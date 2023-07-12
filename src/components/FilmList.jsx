import { useEffect } from "react";
import FilmItem from "./FilmItem";
import "../styles/FilmList.css"
import { fetchFilms } from "../async/fetchFilms";
import { useDispatch, useSelector } from "react-redux";

const FilmList = () => {
    const dispatch = useDispatch()
    const filmList = useSelector(state => state.filmList)
    useEffect(() => dispatch(fetchFilms()), [])
    return<>
        <div className="search">
            <h1>Search</h1>
            <input type="text" onChange={e => {
                    dispatch(fetchFilms(e.target.value))
                }}
            />
        </div>
        <div className="list">
            {filmList.map((film) => (
                <FilmItem key={film.imdbID} props={film}/>
            ))}
        </div>
    </> 
    
}
 
export default FilmList;