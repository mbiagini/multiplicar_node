const fs = require('fs');
const colors = require('colors');

// el = 10 define un valor por defecto.
let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`tabla de ${ base }`.green);
    console.log('====================='.green);

    for (let operand = 1; operand <= limite; operand++) {
        console.log(`${ base } * ${ operand } = ${ base * operand }`, );
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor instroducido ${ base } no es un número`);
            // va return porque el reject no corta codigo.
            return;
        }

        let data = '';

        for (let operand = 1; operand <= limite; operand++) {
            data += (`${ base } * ${ operand } = ${ base * operand }\n`);
        }

        fs.writeFile(`tablas/table-${ base }-to-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`table-${ base }-to-${ limite }.txt`);

        });

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}