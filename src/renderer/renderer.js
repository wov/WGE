// renderer.js

let x = 0;
let s;
let i;

let lastTimestamp = 0,
    maxFPS = 10,
    timestep = 1000 / maxFPS; // ms for each frame


export function render(stage,character){
    s = stage;
    i = character;
    window.requestAnimationFrame(step);
}

function step(timestamp){ 
    window.requestAnimationFrame(step);

    // keep 60fps.
    // console.log(timestamp)
    if (timestamp - lastTimestamp < timestep) return;
    lastTimestamp = timestamp;
    
    if(!s) return;
    const status = i.status;
    const ctx = s.getContext("2d");
    // ctx.drawImage(Idle, 0, 0);
    const sx = 128 * x;
    // clear canvas..
    s.width = s.width;
    // draw image..
    // TODO: 这里会显示丢失。   
    // TODO: render 需要读取camera。
    i['assets'][status].asset && ctx.drawImage(i['assets'][status].asset, sx, 0, 128, 128, 0, 0, 128, 128);
    x++;
    if(x >= 8){x = 0;}


// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern
// 使用pattern绘制背景、前景。

}