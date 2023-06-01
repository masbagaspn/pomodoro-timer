import PropTypes from "prop-types";
import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TimerContext } from "../../context/TimerProvider";

function TimerConfig({ title, length, setLength }) {
  const { time, setTime } = useContext(TimerContext);
  const handleIncrement = () => {
    setLength((curr) => {
      if (curr === 60) {
        return 60;
      } else {
        if (title === "session") {
          setTime(time + 60);
        }
        return curr + 1;
      }
    });
  };

  const handleDecrement = () => {
    setLength((curr) => {
      if (curr === 1) {
        return 1;
      } else {
        if (title === "session") {
          setTime(time - 60);
        }
        return curr - 1;
      }
    });
  };

  return (
    <div className="w-1/2 bg-neutral-950 rounded-lg p-4 text-lime-300">
      <h2 id={`${title}-label`} className="text-sm capitalize">
        {`${title} Length`}
      </h2>
      <div className="w-full mt-4 flex justify-center gap-4">
        <button
          id={`${title}-decrement`}
          onClick={handleDecrement}
          className="w-6 h-6 flex items-center justify-center text-sm hover:bg-lime-400/10 rounded-full transition"
        >
          <AiOutlineMinus />
        </button>
        <span id={`${title}-length`}>{length}</span>
        <button
          id={`${title}-increment`}
          onClick={handleIncrement}
          className="w-6 h-6 flex items-center justify-center text-sm hover:bg-lime-400/10 rounded-full transition"
        >
          <AiOutlinePlus />
        </button>
      </div>
    </div>
  );
}

TimerConfig.propTypes = {
  title: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  setLength: PropTypes.func,
};

export default TimerConfig;
