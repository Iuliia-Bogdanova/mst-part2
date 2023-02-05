import "./Avenger.css";

function Avenger(props) {
    return (
      <div className="avenger-card">
        <img src={props.src} alt={props.alt}></img> 
        <div className="avenger-name">{props.name}</div>
        <div className="superpowers">{props.superpowers}</div>
        <button>Rating</button>
      </div>
    );
}

export default Avenger;