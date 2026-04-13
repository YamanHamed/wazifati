import React from "react";
import { useNavigate } from "react-router-dom";
const NAV_ITEMS = [
  { id: 1, title: "الرئيسة", path: "/main/home" },
  { id: 2, title: " حول المشروع", path: "/main/about" },
  { id: 3, title: "خدماتنا", path: "/main/services" },
  { id: 4, title: "الخصوصية", path: "/main/policies" },
];
const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer dir="rtl" className="footer">
      <div style={{ marginBottom: "16px" }}>
        {NAV_ITEMS.map((e) => {
          return (
            <NavItem
              key={e.id}
              text={e.title}
              onClick={() => {
                navigate(e.path);
              }}
            />
          );
        })}
      </div>
      <p style={{ textAlign: "center" }}>
        <span>2026©</span>
        <span> وظيفتي - جميع الحقوق محفوظة | صنع ب❤️ في سوريا </span>
      </p>
    </footer>
  );
};

export default Footer;

const NavItem = ({ text, onClick }) => {
  return (
    <li onClick={onClick} className="footer-nav-item">
      {text}
    </li>
  );
};
