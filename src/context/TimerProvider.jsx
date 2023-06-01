import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const TimerContext = createContext();

function TimerProvider({ children }) {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [mode, setMode] = useState("session");
  const [active, setActive] = useState(false);
  const [time, setTime] = useState(sessionLength * 60);
  return (
    <TimerContext.Provider
      value={{
        breakLength,
        setBreakLength,
        sessionLength,
        setSessionLength,
        mode,
        setMode,
        active,
        setActive,
        time,
        setTime,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

TimerProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default TimerProvider;
