/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "../styles/Header.module.scss";

const Header = ({ onSearch, searchText }) => {

  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.nav_logo}>
          <svg viewBox="0 0 220 860" xmlns="http://www.w3.org/2000/svg" className={styles.nav_logo_icon}>
            <g fill="none" >
              <path d="M20 340h180v100H20V340zm20-160h140v160H40V180zM60 20h100v160H60V20zm140 360h20v460h-20V380zM0 380h20v460H0V380zm20 400h180v80H20v-80z" fill="#333"></path>
              <path fill="#00AFDB" d="M20 440h180v340H20zM60 0h100v20H60z" ></path>
            </g>
          </svg>
          <span className={styles.nav_logo_text}>PUNK API</span>
        </div>
        <div className={styles.cover}>
          <input className={styles.searchBar}
            placeholder="Search"
            onChange={onSearch}
            type='search'
            value={searchText} />
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default Header;
