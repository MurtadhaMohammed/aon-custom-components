import "./text.css";

const Text = ({ color = "#000", size = 14, children }) => {
  return <p style={{ fontSize: size, color }}>{children}</p>;
};

export default Text;
