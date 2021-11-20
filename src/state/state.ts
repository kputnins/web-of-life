import type Habitat from "../habitat/habitat";
import type Pop from "../pop/pop";

interface State {
  canvas: HTMLCanvasElement;
  habitats: Habitat[][];
  pops: Pop[];
  tick: number;
}

export default State;
