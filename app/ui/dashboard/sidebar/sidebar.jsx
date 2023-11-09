import React from "react";
import styles from "./sidebar.module.css";

import {
  MdDashboard,
  MdHelp,
  MdHelpCenter,
  MdLogout,
  MdMoney,
  MdPeople,
  MdPerson,
  MdSettings,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

// Users, Products, Teams, Setting, help
const menuItems = [
  {
    title: "Page",
    list: [
      {
        title: "Dashboard",
        icon: <MdDashboard />,
        path: "/dashboard",
      },
      {
        title: "Users",
        icon: <MdDashboard />,
        path: "/dashboard/users",
      },
      {
        title: "Products",
        icon: <MdDashboard />,
        path: "/dashboard/products",
      },
      {
        title: "Transactions",
        icon: <MdMoney />,
        path: "/dashboard/transactions",
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        icon: <MdPeople />,
        path: "/dashboard/revenue",
      },
      {
        title: "Reports",
        icon: <MdPeople />,
        path: "/dashboard/reports",
      },
      {
        title: "Teams",
        icon: <MdPeople />,
        path: "/dashboard/teams",
      },
    ],
  },
  {
    title: "Settings",
    list: [
      {
        title: "Setting",
        icon: <MdSettings />,
        path: "/dashboard/setting",
      },
      {
        title: "Help",
        icon: <MdHelpCenter />,
        path: "/dashboard/help",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/no-avatar.png" alt="Logo" width={50} height={50} />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item, index) => (
          <li key={item.title} >
            <span className={styles.cat}>{item.title}</span>
            {item.list.map((subItem, index) => (
              <MenuLink item={subItem} key={subItem.title} />
            ))}
          </li>
        ))}
      </ul>
      {/* Logout button */}
      <button className={styles.logout}>
        <MdLogout />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
