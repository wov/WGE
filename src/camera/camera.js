// camera.js

// position
// {x,y,z}

import * as renderer from './../renderer/renderer.js'


// camera 
// {x,y,z} 坐标
// 需要添加 lookAt？ 二维的游戏也会有lookat嘛？

export const camera = new Proxy( { x:0,y:0,z:0} , {

    // get 
    get(obj,prop){
        return obj[prop];
    },
    // set
    set(obj,prop, value){
        obj[prop] = value;
        renderer.update();
        return true;
    }
})
