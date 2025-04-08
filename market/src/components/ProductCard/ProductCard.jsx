import { useState } from 'react';
import './ProductCard.css';

export default function ProductCard({ data }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <li className="item-card">
                <div className="item-card-container">
                    <img src={data.img} alt={data.title} />
                    <span className="item-card-title">{data.title}</span>
                    <ul className="features-list">
                        {Object.entries(data.features).map(([key, feature]) => (
                            <li key={key} className="feature-item">
                                <span className="feature-title">{feature.title}</span>
                                <span className="feature-description">{feature.description}</span>
                            </li>
                        ))}
                    </ul>
                    <div 
                        className="item-card-price"
                        style={{ 
                            background: data.color,
                            border: `1px solid ${data.color}`
                        }}
                        onClick={handleOpenModal}
                    >
                        {data.btn_text}
                    </div>
                </div>
            </li>

            {isModalOpen && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{data.title}</h2>
                            <button className="close-button" onClick={handleCloseModal}>×</button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-features">
                                {Object.entries(data.features).map(([key, feature]) => (
                                    <div key={key} className="modal-feature">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="modal-prices">
                                <h3>Стоимость:</h3>
                                {Object.entries(data.prices).map(([price, time]) => (
                                    <div key={price} className="price-option">
                                        <span className="price">{price} SC</span>
                                        <span className="time">{time === 43200 ? 'Месяц' : 'День'}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button 
                                className="buy-button"
                                style={{ background: data.color }}
                            >
                                Купить
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
  