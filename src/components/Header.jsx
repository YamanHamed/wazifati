const Header = ({ title, spanTitle, children }) => {
  return (
    <header className="header">
      <span>{spanTitle}</span>
      <h1>{title}</h1>
      {children && children}
    </header>
  );
};

export default Header;
