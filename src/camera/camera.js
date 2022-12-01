// camera.js

// position
// {x,y,z}

export let x,y,z;
export let position;

export function init(position){
    this.x = position.x || 0;
    this.y = position.y || 0; 
    this.z = position.z || 0;
    position = position;
    return position;
}