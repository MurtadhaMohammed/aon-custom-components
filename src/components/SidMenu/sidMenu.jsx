import "./sidMenu.css";

const SidMenu = ({ isOpen = false, children }) => {
  return (
    <div
      className="side-menu"
      style={{
        right: isOpen ? 0 : "-400px",
      }}
    >
      {children}
    </div>
  );
};

export default SidMenu;
