import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to="/">Life</Link>
      <Link to="/moon">Moon</Link>
      <Link to="/love">Love</Link>
      <Link to="/shaif">Shaif</Link>
      <Link to="/pain">Pain</Link>
      <Link to="/last">Last</Link>
    </div>
  );
};

export default Header;
