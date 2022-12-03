import { camera } from "../../src/camera/camera.js";
import {  wge } from "../../src/wge.js";

let character = {
    status : 'idle',
    assets : {
        idle : {
            src : '/demo/sprites/craftpix-net-688514-free-ninja-sprite-sheets-pixel-art/Kunoichi/idle.png',
            frames : 8
        },
        walk : {
            src : '/demo/sprites/craftpix-net-688514-free-ninja-sprite-sheets-pixel-art/Kunoichi/walk.png',
            frames : 8
        },
        run : {
            src : '/demo/sprites/craftpix-net-688514-free-ninja-sprite-sheets-pixel-art/Kunoichi/run.png',
            frames : 8
        }   
    }
}

let forwardTimer = null;

let backgrounds = [
    {
        z : -1000,
        src : "/demo/background/Bright/sky.png"
    },{
        z : -100,
        src : "/demo/background/Bright/jungle_bg.png"
    },{

        z : -50,
        src : "/demo/background/Bright/grasses.png"
    },{
        z : 0,
        src : "/demo/background/Bright/grass&road.png"
    },{
        z : 50,
        src : "/demo/background/Bright/fireflys.png" 
    }
]


wge(character,backgrounds,camera);


document.body.addEventListener('click' , e => {
    character.status = 'walk';
})

document.body.addEventListener('dblclick' , e => {
    character.status = 'run';
})


document.body.addEventListener('keydown' , e => {
    // only once
    if(e.repeat){return;}

    if(forwardTimer){
        clearInterval(forwardTimer);
        forwardTimer = null;
    }


    if(e.code === 'ArrowRight'){
        forwardTimer = setInterval( _ => {
            camera.x += 1;
        },20)
    }else if(e.code === 'ArrowLeft'){
        forwardTimer = setInterval( _ => {
            camera.x -= 1;
        },20)
    }
})


document.body.addEventListener('keyup' , e => {
    // only once
    if(e.repeat){return;}
    clearInterval(forwardTimer);
    forwardTimer = null;

})