import "../styles/FilmItem.css"
const FilmItem = ({props}) => {
    return <div className="item">
        <h1>{props.Title}</h1>
        <h4>{props.Year}</h4>
        <img src={props.Poster} alt="baner" />
    </div>;
}
 
export default FilmItem;