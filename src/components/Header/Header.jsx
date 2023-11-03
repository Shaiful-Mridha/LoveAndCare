import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/LoveAndCare">Life</Link>
      <Link to="/LoveAndCare/moon">Moon</Link>
      <Link to="/LoveAndCare/love">Love</Link>
      <Link to="/LoveAndCare/shaif">Shaif</Link>
      <Link to="/LoveAndCare/pain">Pain</Link>
      <Link to="/LoveAndCare/last">Last</Link>
    </div>
  );
};

export default Header;
