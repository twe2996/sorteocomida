import { Link } from "react-router";
export default function NotFoundPage(){
    return (
    <div>
        <Link className="text-black hover:text-blue-400 font-bold px-3 py-2 rounded-md transition duration-100" to="/">Home</Link>
        <h1>404 not found</h1>
    </div>);
}