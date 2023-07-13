import { useEffect } from "react";
import FilmItem from "./FilmItem";
import "../styles/FilmList.css"
import { fetchFilms } from "../async/fetchFilms";
import { useDispatch, useSelector } from "react-redux";

const FilmList = () => {
    const dispatch = useDispatch()
    const filmList = useSelector(state => state.filmList)
    const favouriteCount = useSelector(state => state.favouriteList.films.length)
    useEffect(() => dispatch(fetchFilms()), [])
    return<>
        <div className="search">
            <div>
                <h1>Search</h1>
                <input type="text" onChange={e => {
                        dispatch(fetchFilms(e.target.value))
                    }}
                />
            </div>
            {console.log(favouriteCount)}
            <h3>Favourite: {favouriteCount}</h3>
        </div>
        <div className="list">
            {filmList.map((film) => (
                <FilmItem key={film.imdbID} props={film}/>
            ))}
        </div>
    </> 
    
}
 
export default FilmList;