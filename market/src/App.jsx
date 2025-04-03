import './App.css'
import './styles/ProductCard.css'
import ProductCard from './components/ProductCard/ProductCard'

const CardData = [
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
function App() {
  return (
    <ul className="item-list">
      {CardData.map((card, index) => (
        <ProductCard key={index} data={card} />
      ))}
    </ul>
  );
}

  
  export default App;
  