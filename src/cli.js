import arg from 'arg';
import fs from 'fs';
import inquirer from 'inquirer';

function commands(rawArgs) {
    if(!rawArgs[2]) {
        console.log('Help')
        return false;
    }
    switch (rawArgs[2]) {
        case "override":
            console.log('override')
            break;
    
        default:
            break;
    }
}

function getDirectories(path) {
    return fs.readdirSync(path).filter(function (file) {
      return fs.statSync(path+'/'+file).isDirectory();
    });
  }

async function promptForMissingOptions(options) {
 const defaultTemplate = 'app_storefront_base';
 const folders =getDirectories('../itelios.cacaushow.sfcc/cartridges');

console.log(folders)
 const questions = [];
   questions.push({
     type: 'list',
     name: 'to',
     message: 'Please choose which project template to use',
     choices: folders,
     default: defaultTemplate,
   });
   questions.push({
    type: 'list',
    name: 'from',
    message: 'Please choose your custom cartridge',
    choices: folders,
    default: defaultTemplate,
  });


 const answers = await inquirer.prompt(questions);
 return {
   ...options,
   from: options.from || answers.from,
   to: options.to || answers.to,
 };
}

export async function cli(args) {
 let options = commands(args);
 options = await promptForMissingOptions(options);
 console.log(options);
}