// asset.js
export function init(character){

    // await to image load all .
    for(let i in character['assets']){
        (async () => {
            const image = new Image();
            image.src = character['assets'][i].src;
            await image.decode();
            // img is ready to use
            character['assets'][i].asset = image;
        })();
    }

    return character;
}

export function loadBackground(backgrounds){
    for(let i in backgrounds){
        (async () => {
            const image = new Image();
            image.src = backgrounds[i].src;
            await image.decode();
            // img is ready to use
            backgrounds[i].image = image
        })();
    }
    return backgrounds
}

