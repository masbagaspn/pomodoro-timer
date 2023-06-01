import { useContext, useEffect, useRef } from "react";
import { HiOutlineRefresh } from "react-icons/hi";
import { HiPause, HiPlay } from "react-icons/hi2";
import { TimerContext } from "../../context/TimerProvider";
import { useInterval } from "../../hooks/userInterval";

function Timer() {
  const {
    mode,
    setMode,
    time,
    setTime,
    active,
    setActive,
    breakLength,
    setBreakLength,
    sessionLength,
    setSessionLength,
  } = useContext(TimerContext);

  const audioRef = useRef();
  const labelRef = useRef();

  const secondsText = time % 60 < 10 ? `0${time % 60}` : `${time % 60}`;
  const minutesText =
    Math.floor(time / 60) < 10
      ? `0${Math.floor(time / 60)}`
      : Math.floor(time / 60);

  useInterval(
    () =>
      setTime((current) => {
        if (current < 1 && mode === "session") {
          audioRef.current.play();
          setMode("break");
          return breakLength * 60;
        }
        if (current < 1 && mode === "break") {
          audioRef.current.play();
          setMode("session");
          return sessionLength * 60;
        }
        return current - 1;
      }),
    active ? 1000 : null
  );

  useEffect(() => {
    setTime(sessionLength * 60);
  }, [sessionLength, setTime]);

  const handleReset = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setActive(false);
    setMode("session");
    setBreakLength(5);
    setSessionLength(25);
    setTime(25 * 60);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <span
        id="timer-label"
        className="text-center text-2xl capitalize"
        ref={labelRef}
      >
        {mode === "session" ? "Session" : "Break"}
      </span>
      <time id="time-left" className="text-6xl text-center py-8">
        {minutesText}:{secondsText}
      </time>
      <div className="w-fit flex gap-4 justify-center items-center text-lg bg-neutral-950 text-lime-300 py-2 px-3.5 rounded-full">
        <button
          id="start_stop"
          className="hover:opacity-75 transition-opacity"
          onClick={() => setActive(!active)}
        >
          {active ? <HiPause /> : <HiPlay />}
        </button>
        <button
          id="reset"
          className="hover:opacity-75 transition-opacity"
          onClick={() => handleReset()}
        >
          <HiOutlineRefresh />
        </button>
      </div>
      <audio
        ref={audioRef}
        id="beep"
        preload="auto"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </div>
  );
}

export default Timer;
