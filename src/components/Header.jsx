import { Link } from "react-router-dom";
export default function Header() {

    return (
        <header>
            <nav className="navigation">
                <p>
                    <Link className="linktext" to="">Home</Link>
                </p>
                <p>
                    <Link className="linktext" to="first">First Page</Link>
                </p>
                <p>
                    <Link className="linktext" to="second">Second Page</Link>
                </p>
            </nav>
        </header>
    );
}