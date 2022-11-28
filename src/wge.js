// wge.js
import * as scene from "./scenes/scene.js";
import * as renderer from "./renderer/renderer.js";
import * as asset from "./asset/asset.js";


export function wge(character){
    character = asset.init(character);
    scene.init(200,200);

    renderer.render(scene.stage,character);
}