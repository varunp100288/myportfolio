import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [menuItems, setMenuItems] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    fetch("https://folio.ddev.site/api/menu-api-module-main-menu-api/main")
      .then((res) => res.json())
      .then((data) => {
        console.log("Menu data:", data);
        setMenuItems(data);
      })
      .catch((err) => {
        console.error("Failed to fetch menu:", err);
      });
  }, []);

  return (
    <>
      <nav id="navbar">
        <div className="nav-container">
          <div className="logo">Personal Shape</div>

          <ul className="nav-links">
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <a href={item.url}>{item.title}</a>
              </li>
            ))}
          </ul>

          <div
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="hamburger"></div>
            <div className="hamburger"></div>
            <div className="hamburger"></div>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`} id="mobileMenu">
        <ul className="mobile-nav-links">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.url} onClick={() => setMobileOpen(false)}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
