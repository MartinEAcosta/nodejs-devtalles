import { yarg } from './config/plugins/args.plugin';
import { hideBin } from 'yargs/helpers';

// console.log(process.argv);

// console.log(yarg);

(async() => {
    await main();

})();

async function main () {

    console.log( yarg )

}