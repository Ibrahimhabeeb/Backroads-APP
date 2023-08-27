import logo from '../images/logo.svg';
import { pagelinks } from '../data';
import { sociallinks } from '../data';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {pagelinks.map((item) => {
                        const { id, href, text } = item;
                        return <li key={id}>
                            <a href={href} className='nav-link' rel="noreferrer">{text}</a>
                        </li>
                    })

                    }
                </ul>


                <ul className="nav-icons">
                    {sociallinks.map((i) => {
                        const { id, href, icon } = i
                        return <li key={id}>
                            <a href={href} className='nav-icon' rel='noreferrer' target='._blank'  >
                                <i className={icon}></i>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </nav>

    )
}
export default Navbar