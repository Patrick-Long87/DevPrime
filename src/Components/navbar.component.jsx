import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <div>Navbar</div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/Post">
        <button>Post</button>
      </Link>
      <Link to="/Profile">
        <button>Profile</button>
      </Link>
    </>
  );
};
