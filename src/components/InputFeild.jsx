const InputFeild = ({
  inputStyle,
  style,
  label,
  name,
  type,
  required,
  placeholder,
  radioName,
  value,
  checked,
  fileSelected,
  onChange,
  children,
}) => {
  if (type === "textarea")
    return (
      <div style={style}>
        <label className="form-label">{label} </label>
        <textarea
          name={name}
          placeholder={placeholder}
          className="form-input"
          style={inputStyle}
          value={value}
          onChange={onChange}
        ></textarea>
      </div>
    );
  if (type === "file")
    return (
      <div style={style}>
        <label className="form-label">{label}</label>
        <label
          className={`upload-label form-input ${fileSelected ? "has-file" : ""}`}
        >
          <input
            name={name}
            style={inputStyle}
            className="upload-input"
            placeholder={placeholder}
            type={type}
            required={required}
            onChange={onChange}
          />
          {children}
        </label>
      </div>
    );
  if (type === "radio-container") {
    return (
      <div style={style}>
        <label className="form-label">{label} </label>
        <div className="radio-container"> {children}</div>
      </div>
    );
  }
  if (type === "radio")
    return (
      <div style={style}>
        <label style={inputStyle} className="radio-item form-input">
          <input
            value={value}
            type="radio"
            name={name || radioName}
            onChange={onChange}
            checked={checked}
          />
          <span>{label} </span>
        </label>
      </div>
    );
  return (
    <div style={style}>
      <label className="form-label">{label} </label>
      <input
        name={name}
        style={inputStyle}
        className="form-input"
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputFeild;
