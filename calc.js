const program = require('commander');
const { prompt } = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'l',
        message: 'Enter length ...'
    },
    {
        type: 'input',
        name: 'w',
        message: 'Enter width ...'
    },
    {
        type: 'input',
        name: 't',
        message: 'Enter thickness ...'
    }
];

const calc = (input) => {
    let w = input.w;
    let l = input.l;
    let t = input.t;

    let bf = (w * l * t) / 12

    console.log(bf + " board feet");
}

program
    .command('calc')
    .alias('bf')
    .action(() => {
        prompt(questions).then(answers =>
            calc(answers));
    });
program.parse(process.argv);