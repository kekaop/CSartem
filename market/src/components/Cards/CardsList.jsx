export default function CardsList({ items, selectedServer }) {
    const datas = [
        {
            servers : [ 1 ],
            type : "VIP",
            title : "⭐ HYPERSPACE⭐ ",
            btn_text: "599 SC/Месяц",
            prices : {
                599: 43200,
                59: 1440
            },
            color: "#ff63e2",
            img: "/card-placeholder.jpg",
            features: {
                "bhop" : {
                    "title" : "Баннихоп",
                    "description" : "Через 2сек. после начала раунда. Макс. скорость: 420",
                },
                "hp" : {
                    "title" : "Доп. ХП",
                    "description" : "115 ХП",
                },
                "armor" : {
                    "title" : "Доп. Броня",
                    "description" : "130 Брони",
                }
            }
        },
        {
            servers : [ 1 ],
            type : "VIP",
            title : "⭐ ASTRAL ⭐",
            btn_text: "299 SC/Месяц",
            prices : {
                599: 43200,
                59: 1440
            },
            color: "#ff0000",
            img: "/card-placeholder.jpg",
            features: {
                "bhop" : {
                    "title" : "Баннихоп",
                    "description" : "Через 2сек. после начала раунда. Макс. скорость: 420",
                },
                "hp" : {
                    "title" : "Доп. ХП",
                    "description" : "115 ХП",
                },
                "armor" : {
                    "title" : "Доп. Броня",
                    "description" : "130 Брони",
                }
            }
        }
    ]

    const times = {
        43200: "Месяц",
        1440: "День"
    }


    return (
        <ul className="item-list"> 
            {datas.map((item) => {
                if (!item.servers.includes(selectedServer.id))
                    return;
                return (
                    <li key={item.title} className="item-card">
                        <div className="item-card-container">
                            <img src={item.img} />
                            <span className="item-card-title">{item.title}</span>
                            <ul>
                                <li>Some Function</li>
                                <li>Some Function</li>
                                <li>Some Function</li>
                                <li>Some Function</li>
                                <li>Some Function</li>
                            </ul>
                            <div attr-color={ item.color } style={{ background: item.color, border: `1px solid ${item.color}` }} className="item-card-price">
                                {item.btn_text}
                            </div>  
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}