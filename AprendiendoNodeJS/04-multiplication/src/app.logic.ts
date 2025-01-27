import fs from 'fs';

let outputMessage = '';
const base = 5;
const headerMessage = `
==================================
       Tabla del ${ base }
==================================\n
`;


for( let i  = 1; i <= 10 ; i++ ){
    outputMessage += `${base} x ${i} = ${ base * i } \n`;
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath , { recursive : true });
outputMessage = headerMessage + outputMessage;
console.log(outputMessage);

fs.writeFileSync(`${ outputPath }/tabla-${base}.txt`, outputMessage);
console.log("File Created");















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