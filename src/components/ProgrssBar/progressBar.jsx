import "./progressBar.css";

const ProgressBar = ({value = 0}) => {
  return (
    <div className="progress-bar">
      <div className="current-bar" style={{width: `${value}%`}}></div>
    </div>
  );
};

export default ProgressBar;
