import { Link } from "react-router-dom";
import "./Life.css";
const Life = () => {
  return (
    <div>
      <Link to="/LoveAndCare/moon">
        <button className="first">Touch me</button>
      </Link>
    </div>
  );
};

export default Life;
