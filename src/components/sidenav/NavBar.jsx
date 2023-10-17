import React, { useEffect } from "react";
import classes from "./NavBar.module.css";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  menuItemStyles,
  profileStyle,
  subMenuLabel,
  subMenuPrefix,
} from "../../data/navbar";
import {
  faTableColumns,
  faCube,
  faUser,
  faMoneyBill,
  faPersonArrowUpFromLine,
  faMessage,
  faDashboard,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ onToggle, toggled }) => {
  useEffect(() => {
    onToggle(toggled);
  }, [toggled, onToggle]);
  return (
    <Sidebar
      toggled={toggled}
      onBackdropClick={() => onToggle(false)}
      onBreakPoint={() => {
        onToggle(true);
      }}
      breakPoint="md"
      backgroundColor="#1f0a38"
      transitionDuration="500"
      rootStyles={{ color: "#a59ab3" }}
      menuItemStyles={menuItemStyles}
      className={classes.sidebar}
    >
      <h3>
        <FontAwesomeIcon icon={faDashboard} className="me-3" />
        Dashboard
      </h3>

      <Menu menuItemStyles={menuItemStyles}>
        <MenuItem icon={<FontAwesomeIcon icon={faTableColumns} />}>
          Dashboard
        </MenuItem>
        <SubMenu label="Product" icon={<FontAwesomeIcon icon={faCube} />}>
          <MenuItem> Product 1</MenuItem>
          <MenuItem> Product 2</MenuItem>
        </SubMenu>
        <SubMenu label="Customers" icon={<FontAwesomeIcon icon={faUser} />}>
          <MenuItem> Customers 1</MenuItem>
          <MenuItem> Customers 2</MenuItem>
        </SubMenu>
        <SubMenu label="Income" icon={<FontAwesomeIcon icon={faMoneyBill} />}>
          <MenuItem> Income 1</MenuItem>
          <MenuItem> Income 2</MenuItem>
        </SubMenu>
        <SubMenu
          label="Promote"
          icon={<FontAwesomeIcon icon={faPersonArrowUpFromLine} />}
        >
          <MenuItem> Promote 1</MenuItem>
          <MenuItem> Promote 2</MenuItem>
        </SubMenu>
        <SubMenu label="Help" icon={<FontAwesomeIcon icon={faMessage} />}>
          <MenuItem> Help 1</MenuItem>
          <MenuItem> Help 2</MenuItem>
        </SubMenu>
      </Menu>

      <Menu
        menuItemStyles={menuItemStyles}
        style={profileStyle}
        className="mt-4"
      >
        <SubMenu label={subMenuLabel} prefix={subMenuPrefix}>
          <MenuItem> Profile</MenuItem>
          <MenuItem> Logout</MenuItem>
        </SubMenu>
      </Menu>
    </Sidebar>
  );
};

export default NavBar;
