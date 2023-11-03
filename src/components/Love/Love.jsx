import { Link } from "react-router-dom";
import "./Love.css";
const Love = () => {
  return (
    <div className="love">
      <h3 className="text">You are the love of my life.</h3>
      <h4>Who loves you more?</h4>
      <Link to="/shaif">
        <button className="third">Touch me</button>
      </Link>
    </div>
  );
};

export default Love;
