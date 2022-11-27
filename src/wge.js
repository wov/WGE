// wge.js
import * as scene from "./scenes/scene.js";
import * as renderer from "./renderer/renderer.js";

export function wge(Idle){
    scene.init(200,200);
    renderer.render(scene.stage,Idle);
}