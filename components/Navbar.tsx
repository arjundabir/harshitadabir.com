import {
  InfoIcon,
  UniversityIcon,
  HandshakeIcon,
  FileCogIcon,
  LightbulbIcon,
  HouseIcon,
} from "lucide-react";
import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex gap-2">
      {navIcons.map((Icon) => (
        <Icon className="h-10 w-10" />
      ))}
      <HouseIcon className="h-20 w-20" />
    </div>
  );
};

export default Navbar;

const navIcons = [
  InfoIcon,
  UniversityIcon,
  HandshakeIcon,

  FileCogIcon,
  LightbulbIcon,
];
