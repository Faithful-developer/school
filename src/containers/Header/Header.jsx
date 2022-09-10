import './Header.scss'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <Link to="/" className='logo' >
                        111-school
                    </Link>
                    <ul className="header-linkers">
                        <li>
                            <Link to='/home'>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/about'>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header