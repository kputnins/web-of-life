import type State from "../../state/state";

import clearFrame from "./clearFrame";
import drawHabitats from "./drawHabitats";
import drawPops from "./drawPops";
import drawDeathZone from "./drawDeathZone";

const draw = (state: State) => {
  const { worldSize } = window.webOfLife.options;

  const { canvas, pops } = state;
  const screenSize = canvas.width;
  const habitatSize = screenSize / worldSize;
  const brush = canvas.getContext("2d");

  if (brush) {
    clearFrame({ brush, screenSize });
    drawDeathZone({
      brush,
      worldSize,
      habitatSize,
      screenSize,
    });
    drawHabitats({
      brush,
      worldSize,
      habitatSize,
      screenSize,
    });
    drawPops({
      brush,
      habitatSize,
      pops,
    });
  }
};

export default draw;
