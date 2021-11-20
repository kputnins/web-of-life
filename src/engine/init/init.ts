import tick from "../tick/tick";

import type State from "../../state/state";
import generateHabitats from "../../habitat/generateHabitats";
import populateHabitats from "../../habitat/populateHabitats";
import generatePops from "../../pop/generatePops";

const init = (canvas: HTMLCanvasElement) => {
  const { population, worldSize, settlementAttemptLimit } =
    window.webOfLife.options;

  if (population > worldSize * worldSize) {
    throw "World size too small - Not enough habitats for the population";
  }

  const habitats = generateHabitats(worldSize);

  let state: State = {
    canvas,
    habitats: habitats,
    pops: generatePops({
      population,
      habitats,
      worldSize,
      settlementAttemptLimit,
    }),
    tick: 0,
  };

  state = populateHabitats(state);

  window.webOfLife.initialState = state;
  window.webOfLife.isSessionInProgress = true;

  const initialTime = new Date();
  tick({
    state,
    previousUpdateTime: initialTime,
    previousFpsTime: initialTime,
    frame: 0,
  });
};

export default init;
