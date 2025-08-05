import './Card.css';

export default function Card({ card, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(card.keyword)}>
      <img src={card.img} alt="" />
      <div className="title">{card.keyword}</div>
    </div>
  );
}
