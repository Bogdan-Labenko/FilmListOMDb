import { useDispatch } from "react-redux";
import "../styles/FilmItem.css"
import { addNewFavouriteFilmAction, removeFromFavouriteAction,  } from "../store/favouriteFilmsReducer";
import { useState } from "react";
import Heart from "react-heart";

const FilmItem = ({props}) => {
    const dispatch = useDispatch()
    const [active, setActive] = useState(props.active ? true : false)
    
    const addToFavourite = () => {
        setActive(true)
        dispatch(addNewFavouriteFilmAction(props.Title))
    }

    const removeFromFavourite = () => {
        setActive(false)
        dispatch(removeFromFavouriteAction(props.Title))
    }

    return <div className="item">
        <h1>{props.Title}</h1>
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <b>{props.Year}</b>
            <Heart isActive={active} onClick={() => {
                active ? removeFromFavourite() : addToFavourite()
            }} animationScale = {1.25} style = {{height: 35, marginBottom:'1rem'}} />
        </div>
        <img src={props.Poster} alt="baner" />
    </div>;
}
 
export default FilmItem;