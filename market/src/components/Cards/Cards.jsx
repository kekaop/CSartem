import { useState } from "react"
import "./Cards.css"
import ServerSelector from "../Global/ServerSelector/ServerSelector"
import CardsList from "./CardsList"

export default function Cards() {
    const servers = [
        {
            "id": 1,
            "title": "⭐ MIRAGE | EARTH 🌍",
            "ip": "185.194.107.200:27215"
        },
        {
            "id": 2,
            "title": "⭐ AWP | EARTH 🌍",
            "ip": "185.194.107.200:27217"
        }
    ]

    const [ selectedServer, setSelectedServer ] = useState(servers[0])

    return (
        <div className="shop-cards">
            <h1>Товары на сервере { selectedServer.title }</h1>
            <ServerSelector setActive={setSelectedServer} active={selectedServer} servers={servers} />
            <CardsList selectedServer={selectedServer}/>
        </div>
    )
}