import "./Avenger.css";

function Avenger(props) {
    return (
      <div className="cards-container">
        <div className="avenger-card">
          <div className="character">{props.character}</div>
          <img src={props.src} alt={props.alt}></img>
          <div className="avenger-name">{props.name}</div>
          <div className="superpowers">{props.superpowers}</div>
          <button>Rating</button>
        </div>
      </div>
    );
}

export default Avenger;