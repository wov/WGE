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

export function loadBackground(background){
    (async () => {
        const image = new Image();
        image.src = background.src;
        await image.decode();
        background.image = image;
    })();

    return background
}

