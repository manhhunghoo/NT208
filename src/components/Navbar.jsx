import React from "react";
import { HiMiniHome } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import Badge from '@mui/material/Badge';
import { Link } from "react-router-dom"
import { UserProfile } from "./UserProfile";
import Navbarmenu from "./Layout/NavBaritem/Navbarmenu";
import Navbaritem from "./Layout/NavBaritem/Navbaritem";
import config from "../config/routes";
import { Search as SearchHeader } from "./NavBar/Search"

const Navbar = () => {
  return (
    <nav className=" items-center flex z-50 p-26 ">
      <div>
        <img
          className="ml-[4rem] mt-[1rem] "
          src="./src/assets/LogoUIT.svg"
          alt="logiUIT"
        />
      </div>

      <div className=" relative ml-40 h-[3.125rem] w-[27rem]">
        <SearchHeader />
      </div>

      <Navbarmenu>
        <Navbaritem
          to={config.home}
          icon={<HiMiniHome className="w-10 h-10" />}
        />
        <Link to={`/Tinnhanpage/`}>
          <Navbaritem
            icon={<Badge color="error" badgeContent={7}>
              <AiOutlineMessage className="w-10 h-10" />
            </Badge>}
          />
        </Link>

        <Navbaritem
          to={config.thongbao}
          icon={<IoNotificationsOutline className="w-10 h-10" />}
        />
      </Navbarmenu>

      <div>
        <UserProfile />
      </div>
    </nav>
  );
};

export default Navbar;
