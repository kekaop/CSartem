function ProductCard({ data }) {
    return (
      <ul className="item-list">
        <li key={data.title} className="item-card">
          <div className="item-card-container">
            <img src={data.img} alt={data.title} />
            <span className="item-card-title">{data.title}</span>
            <ul>
              {Object.entries(data.features).map(([key, feature]) => (
                <li key={key}>{feature.title}</li>
              ))}
            </ul>
            <div
              attr-color={data.color}
              style={{ background: data.color, border: `1px solid ${data.color}` }}
              className="item-card-price"
            >
              {data.btn_text}
            </div>
          </div>
        </li>
      </ul>
    );
  }
  
  
  export default ProductCard;
  