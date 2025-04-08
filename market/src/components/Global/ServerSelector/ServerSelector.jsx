import "./ServerSelector.css"

export default function ServerSelector({ servers, active, setActive }) {
    return (
        <ul className="server-list"> 
            {servers.map((server) => {
                return (
                    <li onClick={() => setActive(server)}
                    key={server.id} className={"server-list-item " + (active.id == server.id ? "active" : "")}>
                        <span>{server.title}</span>
                    </li>
                )
            })}
        </ul>
    )
}