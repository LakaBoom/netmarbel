import {
  BsFillXDiamondFill,
  BsPuzzleFill,
  BsCommand,
  BsGrid3X3Gap,
} from "react-icons/bs";

const Menu = [
  { label: "Clusters", icon: <BsFillXDiamondFill />, link: "/clusters" },
  { label: "Workloads", icon: <BsPuzzleFill />, link: "/workloads" },
  { label: "Service & Ingress", icon: <BsCommand />, link: "/services" },
  { label: "Applications", icon: <BsGrid3X3Gap />, link: "applications" },
];

export default Menu;
