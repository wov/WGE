// scene.js


export let stage = document.createElement('canvas');
export function init(width,height,aspectRatio){

    // todo: 假设没有设置宽高的时候，也需要设置css。
    
    const cssText = (width && height) ? `width:${width}px;height:${height}px;` : '';

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

    stage.width = width;
    stage.height = height;
    stage.style.cssText = cssText;
    document.body.appendChild(stage);
}

// create pattern
export function createPattern(img){
    const ctx = stage.getContext('2d');
    const pattern = ctx.createPattern(img, "repeat");
    return pattern;
}

