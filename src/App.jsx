import Config from "./components/config/Config";
import Timer from "./components/timer/Timer";
import TimerProvider from "./context/TimerProvider";

function App() {
  return (
    <TimerProvider>
      <div className="w-screen min-h-screen grid place-content-center bg-neutral-950 font-serif">
        <div className="w-[60vmin] h-[65vmin] bg-lime-300 rounded-[.5rem] p-6 flex flex-col justify-between">
          <div className="w-full flex justify-between">
            <h1 className="font-medium text-lime-300 text-center bg-neutral-950 rounded-full px-4 py-2">
              25 + 5 Clock
            </h1>
            <p>freeCodeCamp</p>
          </div>
          <Timer />
          <Config />
        </div>
      </div>
    </TimerProvider>
  );
}

export default App;
