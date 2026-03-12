import { id as kochId, mountKochLogo } from "./ts/fractals/koch";
import { id as neckerBgId, mountNeckerBg } from "./ts/illusions/neckerBg";

type CanvasModule = {
  id: string;
  mount: (canvas: HTMLCanvasElement) => { stop(): void };
};

const CANVAS_MODULES: CanvasModule[] = [
  { id: kochId, mount: (c) => mountKochLogo(c) },
  { id: neckerBgId, mount: (c) => mountNeckerBg(c) }
];

function init() {
  for (const mod of CANVAS_MODULES) {
    const el = document.getElementById(mod.id);
    if (el instanceof HTMLCanvasElement) mod.mount(el);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
