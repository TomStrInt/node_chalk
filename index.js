import chalk from 'chalk';

const div_3 = chalk.red;
const div_5 = chalk.blue;
const div_3_5 = chalk.rgb(128,0,128);
const white = chalk.white;


let i;

for(i=1; i<=100; i++ ) 
{
    if (i%3==0 && i%5==0){
        console.log(div_3_5(i));
    }
    else if (i%3==0){
        console.log(div_3(i));
    }
    else if (i%5==0) {
        console.log(div_5(i));
    }
    else
        console.log(white(i));
};