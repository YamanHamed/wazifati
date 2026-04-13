const Card = ({
  type = "small",
  style,
  header,
  title,
  body,
  children,
  onClick,
  className,
}) => {
  if (type === "small")
    return (
      <div onClick={onClick} style={style} className={`card ${className}`}>
        <h1>{header}</h1>
        <h2> {title} </h2>
        <p> {body} </p>
      </div>
    );
  else if (type === "large")
    return (
      <div
        onClick={onClick}
        style={style}
        className={`card large-card ${className}`}
      >
        <h2 style={{ marginBottom: "20px" }}> {title} </h2>
        <p> {children} </p>
      </div>
    );
};

export default Card;
