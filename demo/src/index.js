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

let camera = {
    x: 0,
    y: 0,
    z: 0
}

let forward;

let background = {
    src : "/demo/background/Bright/grass&road.png"
}

wge(character,background,camera);


document.body.addEventListener('click' , e => {
    character.status = 'walk';
})

document.body.addEventListener('dblclick' , e => {
    character.status = 'run';
})


document.body.addEventListener('keydown' , e => {
    // only once
    if(e.repeat){return;}

    if(e.code === 'ArrowRight'){
        forward = true;
    }


})


document.body.addEventListener('keyup' , e => {
    // only once
    if(e.repeat){return;}
    console.log(e.code,e.isComposing);
})