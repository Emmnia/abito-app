import "./Card.css";
import { Link } from "react-router-dom";

export const Card = ({ id, title, price, address, date, img }) => {
  return (
    <>
      <Link to={`/product/${id}`} className="card">
        <div className="card--img">
          <img src={img} alt="product" />
        </div>
        <h5 className="card--title">{title}</h5>
        <p className="card--price">{price}</p>
        <p className="card--desc">{address}</p>
        <p className="card--desc">{date}</p>
      </Link>
    </>
  );
};
