import "./button.css";

const Button = ({ radius = 8, type = "default", children, ...props }) => {
  let styleTypes = {
    default: "btn-default",
    primary: "btn-primary",
  };

  return (
    <button
      className={styleTypes[type]}
      style={{ borderRadius: radius }}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
