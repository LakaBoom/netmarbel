import { useRef } from "react";

import Drawer from "../components/Drawer";
import Appbar from "../components/Appbar";

import "./index.scss";

const Layout = ({ children }) => {
  const drawerRef = useRef(null);
  const onBurgerIconClick = () => {
    console.log(drawerRef);
    drawerRef.current.classList.toggle("show");
  };
  return (
    <div className="container">
      <Appbar onBurgerIconClick={onBurgerIconClick} />
      <Drawer drawerRef={drawerRef} />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
