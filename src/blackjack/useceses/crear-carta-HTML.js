
export const crearCartaHTML=(carta) =>{

    /**
     * @param {String} carta
     * @returns {HTMLImageElement} Imagen de retorno
     */
    if (!carta) throw new Error ('La carta es un documento obligatorio.')

     // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
        imgCarta.classList.add('carta');

        return imgCarta;
}