const marcas = require('./collectibles');

const hotToys = marcas(1);
const bandai = marcas(2);
const starWars = marcas(3);


const unifiedCollectibles=[...hotToys, ...bandai, ...starWars];

const collectible= {
    figuras: unifiedCollectibles,
    listFigures: function() {
       this.figuras.forEach(figura => {
           console.log(figura);
       });
    },
    figuresByBrand: function(marca) {
        return this.figuras.filter(figura => figura.marca === marca);
    }
}




console.log(unifiedCollectibles);
console.log(collectible.listFigures());
console.log(collectible.figuresByBrand("Bandai"));
