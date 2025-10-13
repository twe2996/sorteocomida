import { Link } from "react-router";
import Button from "../components/Button";

export default function ProfilePage(){
    var randseed = Math.random().toString().slice(2)
    
    return (
        <div>
            
            <Link to={`/SorteoComida/${randseed}`}>
                <Button>Genere sorteo</Button>
            </Link>
            
        </div>
    );
}