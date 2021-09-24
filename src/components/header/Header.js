import React from "react";
import "./Header.css";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  Flag as FlagIcon,
  StorefrontOutlined as StorefrontOutlinedIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Add as AddIcon,
  NotificationsActive as NotificationsActiveIcon,
  ExpandMore as ExpandMoreIcon,
  Forum as ForumIcon,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import { useStateValue } from "../StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <img src="static/images/facebook.png" alt="" />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__option">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__option">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src={user.photoURL}/>
          <h4>{user.displayName}</h4>
        </div>
        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
