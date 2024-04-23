const fs = require("node:fs");
const fsPromises = require("node:fs/promises");

console.log("Promise output: " + doesFileExistPromise("./pokemonStats.json"));
console.log("Sync output: " + doesFileExistSync("./pokemonStats.json"));


(async () => {
    let asyncResult = await doesFileExistAsync("./pokemonStats.json");   
    console.log("Async output: " + asyncResult.size);
})();


async function doesFileExistAsync(targetPath){
    return await fsPromises.stat(targetPath);

    // let result = false;
    // result = await fsPromises.stat(targetPath);
    // return result;
}

function doesFileExistPromise(targetPath){
    let result = false;

    return new Promise((resolve, reject) => {
        fsPromises.stat(targetPath).then(statData => {
            if (statData.size || statData.birthtimeMs) {
                result = true;
                resolve(result)
            } else {
                resolve(result)
            }
        }).catch(error => {
            reject(error);
        });
    });

    
    // fs.exists(targetPath, (existsResult) => {
    //     result = existsResult;
    //     return result;
    // });

    // fs.exists(targetPath).then((existsResult) => {
    //   // if (existsResult){
    //   //     result = true;
    //   // } else {
    //   //     result = false;
    //   // }
    //   result = existsResult;
    // }).catch((error) => {
    //  console.error(error);
    // });

    // return result;
}


function doesFileExistSync(targetPath){
    let result = false;

    if (fs.existsSync(targetPath)){
        result = true;
    } else {
        result = false;
    }
    return result;
}


function createJsonFile(targetPath, data){
    // TODO: wishlist item because a json file already exists
}


async function loadDataFromFile(targetPath){
    let data = null;

    let doesFileExist = await doesFileExistAsync(targetPath);
    if (doesFileExist){
        data = await fsPromises.readFile(targetPath, { encoding: 'utf8' });
        data = JSON.parse(data);
    }
    
    return data;
}

(async () => {
    let fileData = await loadDataFromFile("./pokemonStats.json");
    console.log(fileData);
})()


/* 
Technique 1 to modify keys in JSON:
function editPokemonCaught(newData){}
function editFavouriteType(newData){}
fucntion editPokemonCompletionNumber(newData){}
*/

/*
Technique 2 to modify keys in JSON:
function editKey(targetKey, newData){}
*/


function saveDataToFile(targetPAth, data){
    // TODO: Write data to JSON file logic goes here
}