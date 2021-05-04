import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.scss";

const Appbar = ({ onBurgerIconClick }) => {
  return (
    <header className="appbar">
      <div className="burgerIcon" onClick={onBurgerIconClick}>
        <BsThreeDotsVertical />
      </div>
      <div>Configuration</div>
      <button>Refresh</button>
      <button>Delete</button>
    </header>
  );
};

export default Appbar;
