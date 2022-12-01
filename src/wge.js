// wge.js
import * as scene from "./scenes/scene.js";
import * as renderer from "./renderer/renderer.js";
import * as asset from "./asset/asset.js";

import {camera} from "./camera/camera.js"


export function wge(character,background){
    character = asset.init(character);
    background = asset.loadBackground(background);
    scene.init(200,200);

    camera.x = 100;

    setTimeout( _ => {
        camera.x = 200;
    },2000 );

    renderer.render(scene.stage,character,background);
}