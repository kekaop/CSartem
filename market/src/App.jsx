import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import Header from './components/Header/Header'

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
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ QUANTUM ⭐",
    btn_text: "399 SC/Месяц",
    prices : {
        399: 43200,
        39: 1440
    },
    color: "#4287f5",
    img: "/card-placeholder.jpg",
    features: {
        "bhop" : {
            "title" : "Баннихоп",
            "description" : "Через 3сек. после начала раунда. Макс. скорость: 400",
        },
        "hp" : {
            "title" : "Доп. ХП",
            "description" : "110 ХП",
        },
        "respawn" : {
            "title" : "Возрождение",
            "description" : "1 раз за раунд",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ NEBULA ⭐",
    btn_text: "199 SC/Месяц",
    prices : {
        199: 43200,
        19: 1440
    },
    color: "#9b42f5",
    img: "/card-placeholder.jpg",
    features: {
        "speed" : {
            "title" : "Скорость",
            "description" : "+10% к скорости передвижения",
        },
        "hp" : {
            "title" : "Доп. ХП",
            "description" : "105 ХП",
        },
        "money" : {
            "title" : "Бонус денег",
            "description" : "+300$ в начале раунда",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ COSMIC ⭐",
    btn_text: "799 SC/Месяц",
    prices : {
        799: 43200,
        79: 1440
    },
    color: "#f5d142",
    img: "/card-placeholder.jpg",
    features: {
        "bhop" : {
            "title" : "Баннихоп",
            "description" : "Сразу после начала раунда. Макс. скорость: 450",
        },
        "hp" : {
            "title" : "Доп. ХП",
            "description" : "120 ХП",
        },
        "armor" : {
            "title" : "Доп. Броня",
            "description" : "140 Брони",
        },
        "respawn" : {
            "title" : "Возрождение",
            "description" : "2 раза за раунд",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ PHOENIX ⭐",
    btn_text: "499 SC/Месяц",
    prices : {
        499: 43200,
        49: 1440
    },
    color: "#ff8c00",
    img: "/card-placeholder.jpg",
    features: {
        "bhop" : {
            "title" : "Баннихоп",
            "description" : "Через 1сек. после начала раунда. Макс. скорость: 430",
        },
        "hp" : {
            "title" : "Доп. ХП",
            "description" : "118 ХП",
        },
        "fire" : {
            "title" : "Огненная аура",
            "description" : "Поджигает врагов при касании",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ SHADOW ⭐",
    btn_text: "349 SC/Месяц",
    prices : {
        349: 43200,
        35: 1440
    },
    color: "#4a4a4a",
    img: "/card-placeholder.jpg",
    features: {
        "stealth" : {
            "title" : "Невидимость",
            "description" : "30% шанс стать невидимым на 3 сек",
        },
        "speed" : {
            "title" : "Скорость",
            "description" : "+15% к скорости в темноте",
        },
        "vision" : {
            "title" : "Ночное зрение",
            "description" : "Улучшенное зрение в темноте",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ FROST ⭐",
    btn_text: "449 SC/Месяц",
    prices : {
        449: 43200,
        45: 1440
    },
    color: "#00ffff",
    img: "/card-placeholder.jpg",
    features: {
        "freeze" : {
            "title" : "Ледяная аура",
            "description" : "Замедляет врагов при касании",
        },
        "armor" : {
            "title" : "Ледяная броня",
            "description" : "135 Брони",
        },
        "resist" : {
            "title" : "Морозостойкость",
            "description" : "-50% урона от замораживания",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ THUNDER ⭐",
    btn_text: "649 SC/Месяц",
    prices : {
        649: 43200,
        65: 1440
    },
    color: "#ffd700",
    img: "/card-placeholder.jpg",
    features: {
        "speed" : {
            "title" : "Молниеносность",
            "description" : "+20% к скорости передвижения",
        },
        "shock" : {
            "title" : "Электрошок",
            "description" : "Оглушает врагов при ударе ножом",
        },
        "charge" : {
            "title" : "Подзарядка",
            "description" : "+100 HP за каждое убийство",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ TOXIC ⭐",
    btn_text: "299 SC/Месяц",
    prices : {
        299: 43200,
        29: 1440
    },
    color: "#32cd32",
    img: "/card-placeholder.jpg",
    features: {
        "poison" : {
            "title" : "Ядовитая аура",
            "description" : "Отравляет врагов при касании",
        },
        "resist" : {
            "title" : "Иммунитет",
            "description" : "Иммунитет к отравлению",
        },
        "heal" : {
            "title" : "Регенерация",
            "description" : "+2 HP в секунду",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ GRAVITY ⭐",
    btn_text: "549 SC/Месяц",
    prices : {
        549: 43200,
        55: 1440
    },
    color: "#9370db",
    img: "/card-placeholder.jpg",
    features: {
        "jump" : {
            "title" : "Высокий прыжок",
            "description" : "+50% к высоте прыжка",
        },
        "fall" : {
            "title" : "Невесомость",
            "description" : "Нет урона от падения",
        },
        "push" : {
            "title" : "Гравитационная волна",
            "description" : "Отталкивает врагов при приземлении",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ VAMPIRE ⭐",
    btn_text: "399 SC/Месяц",
    prices : {
        399: 43200,
        39: 1440
    },
    color: "#8b0000",
    img: "/card-placeholder.jpg",
    features: {
        "lifesteal" : {
            "title" : "Вампиризм",
            "description" : "Восстановление 10% от нанесенного урона",
        },
        "night" : {
            "title" : "Ночной охотник",
            "description" : "+15% к урону ночью",
        },
        "blood" : {
            "title" : "Кровавая жажда",
            "description" : "Временное ускорение после убийства",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ TITAN ⭐",
    btn_text: "699 SC/Месяц",
    prices : {
        699: 43200,
        69: 1440
    },
    color: "#cd853f",
    img: "/card-placeholder.jpg",
    features: {
        "hp" : {
            "title" : "Титаническое здоровье",
            "description" : "125 ХП",
        },
        "armor" : {
            "title" : "Титаническая броня",
            "description" : "150 Брони",
        },
        "strength" : {
            "title" : "Сила титана",
            "description" : "+25% к урону в ближнем бою",
        }
    }
},
{
    servers : [ 1 ],
    type : "VIP",
    title : "⭐ NINJA ⭐",
    btn_text: "449 SC/Месяц",
    prices : {
        449: 43200,
        45: 1440
    },
    color: "#483d8b",
    img: "/card-placeholder.jpg",
    features: {
        "stealth" : {
            "title" : "Маскировка",
            "description" : "Бесшумное передвижение",
        },
        "dash" : {
            "title" : "Рывок",
            "description" : "Быстрое перемещение вперед",
        },
        "throw" : {
            "title" : "Метание",
            "description" : "Возможность метать нож",
        }
    }
}
]

function App() {
  return (
    <>
      <Header />
      <ul className="item-list">
        {CardData.map((card, index) => (
          <ProductCard key={index} data={card} />
        ))}
      </ul>
    </>
  );
}

export default App;
  