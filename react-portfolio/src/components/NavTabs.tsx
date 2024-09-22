import { Link,useLocation } from "react-router-dom";

function NavTabs(){
    const currentPage = useLocation().pathname;

    return(
        <nav>
            <ul>
                <a href="#about-me">
                    <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                    About Me
                    </Link>
                </a>
                <a href="#porfolio">
                    <Link to="/Portfolio" className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}>
                    Work
                    </Link>
                </a>
                <a href="#contact-me">
                    <Link to="/Contact" className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}>
                    Contact Me
                    </Link>
                </a>
                <a href="#resume">
                    <Link to="/Resume" className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}>
                    Resume
                    </Link>
                </a>
            </ul>
        </nav>
    );
}

export default NavTabs;