// asset.js
export function init(character){

    // await to image load all .
    for(let i in character){
        (async () => {
            const image = new Image();
            image.src = character[i].src;
            await image.decode();
            // img is ready to use
            character[i].asset = image;
        })();
    }
    return character;
}