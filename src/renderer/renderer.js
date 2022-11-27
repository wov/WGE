// renderer.js

let x = 0;

export function render(stage,Idle){
    console.log(Idle);
    const ctx = stage.getContext("2d");
    // ctx.drawImage(Idle, 0, 0);
    const sx = 128 * x;
    // clear canvas..
    stage.width = stage.width;
    // draw image..
    ctx.drawImage(Idle, sx, 0, 128, 128, 0, 0, 128, 128);
    x++;
    if(x >= 8){x = 0;}
    
    //TODO: change to requsetanimation Frame..

    // window.requestAnimationFrame(render(stage,Idle));

    setInterval( ()=>{render(stage,Idle)},16 );


}