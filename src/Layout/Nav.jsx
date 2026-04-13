import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
const NAV_ITEMS = [
  { id: 1, title: "الرئيسة", path: "/main/home" },
  { id: 2, title: " حول المشروع", path: "/main/about" },
  { id: 3, title: "خدماتنا", path: "/main/services" },
  { id: 4, title: "الخصوصية", path: "/main/policies" },
];
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="nav" dir="rtl">
      <div
        onClick={() => {
          navigate("/main/home");
          setIsMenuOpen(false);
        }}
      >
        <span className="logo">وظيفتي</span>
      </div>

      <ul className="nav-menu-desktop">
        {NAV_ITEMS.map((e) => (
          <NavItem
            onClick={() => {
              navigate(e.path);
              setIsMenuOpen(false);
            }}
            text={e.title}
            key={e.id}
          />
        ))}
        <Button
          style={{ padding: "7px 14px", borderRadius: "20px" }}
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
            setIsMenuOpen(false);
          }}
          text="تسجيل الخروج"
          className="filled-btn"
        />
      </ul>

      <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
      <ul className={`nav-menu-mobile ${isMenuOpen ? "active" : ""}`}>
        {NAV_ITEMS.map((e) => (
          <NavItem
            onClick={() => {
              navigate(e.path);
              setIsMenuOpen(false);
            }}
            text={e.title}
            key={e.id}
          />
        ))}
        <Button
          onClick={() => {
            localStorage.removeItem("user");
            navigate("/");
            setIsMenuOpen(false);
          }}
          text="تسجيل الخروج"
          className="filled-btn"
        />
      </ul>
    </nav>
  );
};

export default Nav;

const NavItem = ({ text, onClick }) => {
  return (
    <li onClick={onClick} className="nav-item">
      {text}
    </li>
  );
};
