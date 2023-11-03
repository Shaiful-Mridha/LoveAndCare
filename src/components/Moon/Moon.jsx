import { Link } from "react-router-dom";
import "./Moon.css";

const Moon = () => {
  return (
    <div className="moon">
      <h3>Hi</h3>
      <h1 className="mm">M</h1>
      <h4>Do you know how precious you are to me?</h4>
      <Link to="/love">
        <button className="second">Touch me</button>
      </Link>
    </div>
  );
};

export default Moon;
