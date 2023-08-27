import { pagelinks, sociallinks } from "../data"
const Footers = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pagelinks.map((i) => {
                    const { id, href, text } = i;
                    return (
                        <li key={id}>
                            <a href={href} className="footer-link">{text}</a>
                        </li>
                    )
                })}
            </ul>
            <ul className="footer-icons">
                {sociallinks.map((i) => {
                    const { id, href, text } = i;
                    return (
                        <li key={id}>
                            <a href={href} target="_blank" className="footer-icon" ></a>
                        </li>
                    )
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    )
}

export default Footers