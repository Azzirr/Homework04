const fs = require('fs');
const yargs = require('yargs');
const args = yargs.argv;
const user = {
    name: 'Jan',
    lastName: 'Nowak',
};
function writeObjectToJSON(){
    let getData = JSON.stringify(user, null, 1); //value/replacer/space
    fs.writeFile('user.json', getData, (err) => {
        if(err) throw err;
        console.log('Data succesfuly written to a file!')
    })
}
writeObjectToJSON()

// TO DO!
// function readBeforeRewrite(){
//     fs.readFile('user.json', (err, data) => {
//         if (err) throw err;
//         let result = JSON.parse(data);
//         console.log(result.name);
//     });
// }
// readBeforeRewrite()

function addNewObject(){
    const object = {
        name: args.name,
        lastName: args.lastName,
    };
    let getData = JSON.stringify(object, null, 1); 
    fs.appendFile('user.json', getData, (err) => {
        if(err) throw err;
    })
}
addNewObject();

