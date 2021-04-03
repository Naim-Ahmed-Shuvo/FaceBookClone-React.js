import ChatIcon from "@material-ui/icons/Chat";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import React from "react";
import "../Css/Sidebar.css";
import SidebarRow from "./SidebarRow.jsx";
import {useStateValue} from '../StateProvider';
const SideBar = () => {
  const [{user}] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow
        title={user.displayName}
        src={user.photoURL}
      />

      <SidebarRow title="Cvoid Information center" Icon={LocalHospitalIcon} />
      <SidebarRow title="Friends" Icon={EmojiFlagsIcon} />
      <SidebarRow title="Massenger" Icon={PeopleIcon} />
      <SidebarRow title="Market Place" Icon={ChatIcon} />
      <SidebarRow title="Videos" Icon={StorefrontIcon} />
      <SidebarRow title="Market Place" Icon={VideoLibraryIcon} />
      <SidebarRow />
    </div>
  );
};

export default SideBar;
