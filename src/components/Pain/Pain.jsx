/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Pain.css";
const Pain = () => {
  return (
    <div className="pain">
      <p className="text3">
        "When I close my eyes, I can see you so clearly, but once I open my
        eyes, I can't see you anymore."
      </p>
      <Link to="/last">
        <button className="fifth">Last Touch</button>
      </Link>
    </div>
  );
};

export default Pain;
