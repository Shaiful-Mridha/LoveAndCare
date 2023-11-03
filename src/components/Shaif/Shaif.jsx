import { Link } from "react-router-dom";
import "./Shaif.css";
const Shaif = () => {
  return (
    <div className="shaif">
      <h3 className="text1">You will tell me this one!</h3>
      <h5>You know what I am gonna say tonight!</h5>
      <Link to="/LoveAndCare/pain">
        <button className="fourth">Touch me</button>
      </Link>
    </div>
  );
};

export default Shaif;
