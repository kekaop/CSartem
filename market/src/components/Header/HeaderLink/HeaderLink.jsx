export default function HeaderLink({ text, link, icon }) {
    return (
        <li className="header-list-item">
            <a className="header-link" href={link}><span className="material-symbols-outlined icon">{icon}</span><span>{text}</span></a>
        </li>
    )
}