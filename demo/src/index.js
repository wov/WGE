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

let backgrounds = [
    {
        z : 1,//使用z轴坐标。。
        src : "",
        speed : "" //?
    }
]


wge(character);


document.body.addEventListener('click' , e => {
    character.status = 'walk';
    // console.log('why u are click me so hard!!')
})

document.body.addEventListener('dblclick' , e => {
    character.status = 'run';
    // console.log('why u are click me so hard!!')
})

