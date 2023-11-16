import "./slider.css";

const Slider = ({ list, current , onNext, onPrev}) => {
  return <div className="slider">
    <div className="content"> {list[current]}</div>
    <div className="actions">
        <button onClick={onNext}>Next</button>
        <button onClick={onPrev}>Prev</button>
    </div>
  </div>;
};

export default Slider;
