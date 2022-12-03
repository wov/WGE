// renderer.js


import {camera} from './../camera/camera.js';

let x = 0;
let s;
let i;
let bs;
let position = 0;

let lastTimestamp = 0,
    maxFPS = 10,
    timestep = 1000 / maxFPS; // ms for each frame


export function render(stage,character,backgrounds){
    s = stage;
    i = character;
    bs = backgrounds;
    window.requestAnimationFrame(step);
}

function step(timestamp){ 
    window.requestAnimationFrame(step);

    // keep 60fps.
    // console.log(timestamp)
    if (timestamp - lastTimestamp < timestep) return;
    lastTimestamp = timestamp;
    

    // clear canvas..
    s.width = s.width;
    const ctx = s.getContext("2d");

    // 绘制背景
    // TODO : 需要根据z轴判断绘制的优先级。
    // TODO: 读取camera的位置，然后计算各个背景的截取图片
    // 修改使用draw image的方式。pattern 好像并不太适合？
    // if(b && b.image){
    //     ctx.drawImage(b.image, position, 0, b.image.width/3, b.image.height, 0, 0, s.width, s.height); 
    // }

    // TODO: 优化多张图片输出到一张？
    // TODO: 或者优化成 pattern
    if(bs && bs.length  ){
        // NEEDTOFIXED : 先强制1:1
        bs.forEach( b => {
            // TODO : position 换成camera.x
            let p = -camera.x * s.width / ((camera.z - b.z) * Math.tan(30));

            // console.log(camera.z  b.z)

            b.image && ctx.drawImage(b.image, p, 0, 1080, 1080, 0, 0, s.width, s.height); 
        })
    }

    // position+=5;

    // return;

    if(!s) return;
    const status = i.status;
    // ctx.drawImage(Idle, 0, 0);
    const sx = 128 * x;

    // draw image..
    // TODO: 这里会显示丢失。   
    // TODO: render 需要读取camera。
    i['assets'][status].asset && ctx.drawImage(i['assets'][status].asset, sx, 0, 128, 128, 0, 0, 128, 128);
    x++;
    if(x >= 8){x = 0;}



// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern
// 使用pattern绘制背景、前景。

}

export function update(){
    // console.log(camera.x);
    // console.log('update a rendder');
}