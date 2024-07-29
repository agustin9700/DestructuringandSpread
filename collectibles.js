const fs = require('fs');
const path = require('path');

function importar(marca) {
    const filePath = path.join(__dirname, 'datos', `figuras${marca}.json`);
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    } else {
        throw new Error('El archivo para la marca no se encuentra.');
    }
}

module.exports = importar;
