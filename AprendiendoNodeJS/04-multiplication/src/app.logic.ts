import { yarg } from './config/plugins/args.plugin';

const { b:base , s:showTable , l:limit } = yarg;

let outputMessage = '';
const stop = limit ? limit : 10;

const headerMessage = `
==================================
       Tabla del ${ base }
==================================\n
`;


outputMessage = headerMessage + outputMessage;

if( showTable ){
    console.log(outputMessage);
}

















// Mi versión

/*import fs, { writeFile } from 'fs';

const getTableOf = ( solicited : number ) => {
    let data : string = `Tabla de ${solicited}`;

    for(let i = 0; i < 10; i++){

        data += `\n ${solicited} * ${i} = ` + solicited * i;
    
    }
    if(!fs.existsSync('outputs')){
        const dir = fs.mkdirSync('outputs');

        writeFile(`outputs/multiplication.txt`, data, (err) => {

            if(err){
                console.log('Error al crear.');
            }
    
        })
    }
    
} 

const message : string = "Hola mundo";

console.log(message);
getTableOf(2);
*/