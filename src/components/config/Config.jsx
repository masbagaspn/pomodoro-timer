import BreakConfig from "./BreakConfig";
import SessionConfig from "./SessionConfig";

function Config() {
  return (
    <div className="w-full flex gap-4 px-4">
      <BreakConfig />
      <SessionConfig />
    </div>
  );
}

export default Config;
