import { Link } from "react-router-dom"
function Menu(){
    return(
        <ul>
            <li>
                <Link to="/home">Home</Link>
                <Link to="/about">about</Link>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    )
}
export default Menu;