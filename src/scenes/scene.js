// scene.js

export function scene(width,height,aspectRatio){
    // TODO : 是不是可以不用canvas?
    const canvas = document.createElement("CANVAS");

    // window.screen.availHeight
    // window.screen.availWidth
    // canvas 使用真实的 width\height

    const vw = window.screen.availWidth;
    const vh = window.screen.availHeight;
    const dr = window.devicePixelRatio;

    // 这里要考虑devicePixelRatio
    width = width ? width * dr : vw;
    height = height ? height * dr : vh;

    if(aspectRatio){
        height = width/aspectRatio;
    }


    canvas.width = width;
    canvas.height = height;
    
    document.body.appendChild(canvas)

}