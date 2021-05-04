import { BsSun, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import menu from "../../constants/menu";
import "./index.scss";

const Drawer = ({ drawerRef }) => {
  const onCloseClick = () => {
    drawerRef.current.classList.remove("show");
  };
  return (
    <nav ref={drawerRef} className="drawer">
      <div className="drawerBox">
        <div className="logo">
          <BsSun />
          <span className="text">NETMARBEL</span>
        </div>
        <div className="close" onClick={onCloseClick}>
          <BsX />
        </div>
        <ul className="menuList">
          {menu.map((item) => (
            <li key={item.label} className="menuItem selected">
              <Link to={item.link} className="menuLink">
                <span>{item.icon}</span>
                <div className="text">{item.label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="drawerFooter">
        <span>Coded by Xuelian</span>
      </div>
    </nav>
  );
};

export default Drawer;
