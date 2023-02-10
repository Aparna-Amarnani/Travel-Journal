import logo from "./logo.png"
import "./NavBar.css"
export default function NavBar(){
    return(
        <nav>
            <img src={logo} alt="not loaded?" />
            <p className="title">my travel journal.</p>
        </nav>
    )
}