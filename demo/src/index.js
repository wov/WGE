import {  wge } from "../../src/wge.js";

let Idle = new Image();
Idle.src = "./sprites/craftpix-net-688514-free-ninja-sprite-sheets-pixel-art/Kunoichi/Walk.png";
// TODO 添加资源管理器
Idle.onload = function(){
    wge(Idle);
}
