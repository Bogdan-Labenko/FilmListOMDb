import { useSelector } from "react-redux";

const FavouriteFilms = () => {
    const favouriteFilms = useSelector(state => state.favouriteList.films)
    return <>
        <h1>Favourite</h1>
        <div>
            {favouriteFilms.map((film) => (
                    // <FilmItem key={film.imdbID} props={film}/>
                    <div>{film}</div>
                    
                ))}
        </div>
    </>;
}
 
export default FavouriteFilms;