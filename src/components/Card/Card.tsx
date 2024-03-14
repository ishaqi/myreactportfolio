import "./Card.css";

interface Props {
  emoji: string;
  heading: string;
  detail:string;
  color?:string;
}

const Card = ({emoji, heading, detail, color=''}:Props) => {
  return (
    <div className="card" style={{borderColor: color}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
