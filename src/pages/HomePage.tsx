import { Link } from "react-router";

export default function HomePage(){
    return (
        <div>
            <h1>
                HomePage
            </h1>
            <Link to="/SorteoComida">Sorteo Comida</Link> 
        </div>
    );
}