// renderer.js

let x = 0;
let s;
let i;

let lastTimestamp = 0,
    maxFPS = 10,
    timestep = 1000 / maxFPS; // ms for each frame


export function render(stage,Idle){
    s = stage;
    i = Idle;
    window.requestAnimationFrame(step);
}

function step(timestamp){ 
    window.requestAnimationFrame(step);

    // keep 60fps.
    // console.log(timestamp)
    if (timestamp - lastTimestamp < timestep) return;
    lastTimestamp = timestamp;
    
    if(!s) return;

    const ctx = s.getContext("2d");
    // ctx.drawImage(Idle, 0, 0);
    const sx = 128 * x;
    // clear canvas..
    s.width = s.width;
    // draw image..
    ctx.drawImage(i, sx, 0, 128, 128, 0, 0, 128, 128);
    x++;
    if(x >= 8){x = 0;}

}