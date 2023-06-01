import { useContext } from "react";
import TimerConfig from "./TimerConfig";
import { TimerContext } from "../../context/TimerProvider";

function BreakConfig() {
  const { breakLength, setBreakLength } = useContext(TimerContext);
  return (
    <TimerConfig
      title="break"
      length={breakLength}
      setLength={setBreakLength}
    />
  );
}

export default BreakConfig;
