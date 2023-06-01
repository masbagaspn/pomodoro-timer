import { useContext } from "react";
import TimerConfig from "./TimerConfig";
import { TimerContext } from "../../context/TimerProvider";

function SessionConfig() {
  const { sessionLength, setSessionLength } = useContext(TimerContext);

  return (
    <TimerConfig
      title="session"
      length={sessionLength}
      setLength={setSessionLength}
    />
  );
}

export default SessionConfig;
