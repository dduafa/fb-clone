import React from "react";
import SidebarRow from "../sidebarRow/SidebarRow";
import "./Sidebar.css";

import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMore
} from '@mui/icons-material';

const Sidebar = () => {
  return <div className="sidebar">
    <SidebarRow src='static/images/mark.jpeg' title='Derek' />
    <SidebarRow Icon={LocalHospital} title='COVID-19 Information Center' />
    <SidebarRow Icon={EmojiFlags} title='Pages' />
    <SidebarRow Icon={People} title='Friends' />
    <SidebarRow Icon={Chat} title='Messenger' />
    <SidebarRow Icon={Storefront} title='Marketplace' />
    <SidebarRow Icon={VideoLibrary} title='Videos' />
    <SidebarRow Icon={ExpandMore} title='Marketplace' />
  </div>;
};

export default Sidebar;
