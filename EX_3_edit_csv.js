const fs = require('fs');
const csv = require('csv-parser');
const fileUrl = '../data/electronic-card-transactions-december-2022-csv-tables.csv';
const nbrOutput = 20;
let keys;
let inc = 1;
let test;


let txtWriteStream = "";
let compoData = [];


//Préparation des tableaux
fs.createReadStream(fileUrl)
.pipe(csv())
.on('data', (data) => {
// Ouverture des 20 premières lignes.
if (inc <= nbrOutput) {

    //console.table(data);
    keys = Object.keys(data); //Récupère sous forme de tableau les colonnes 
    // OU getOwnPropertyNames(data);


    if(inc == 1){ //On ne traite qu'une fois la création de la string des colonnes            
        for(let i in keys){
            //console.log(keys[i]);
            if(i<keys[i].length-1){
                txtWriteStream = txtWriteStream+""+keys[i]+",";
            }else{   
                txtWriteStream = txtWriteStream+""+keys[i];
            }
            
        }         
    }

    //compoData.push(Object.getOwnPropertyDescriptors(data)); // JSON.stringify(obj)
    
    
    /*
    for(k=0; K<=keys.length; k++){

        test = JSON.stringify(data); //Convertis objet en chaine de caractère
        test = test.replace(/"([^"]+)":/g, '$1:').replace(/\uFFFF/g, '\\\"'); //retire les guillements des titres
        test = test.match(/"(.*?)"/); //récupère la première valeur entre guillemets

    }*/

    dataStringify = JSON.stringify(data); //Convertis objet en chaine de caractère
    dataStringify = dataStringify.replace(/"([^"]+)":/g, '$1:').replace(/\uFFFF/g, '\\\"'); //retire les guillements des titres
    dataStringifyTab = dataStringify.match(/"(.*?)"/g) //récupère le reste des valeur entre guillemets et la stocker en tableau
    //console.table(testtab);

    for(let k in dataStringifyTab){
        //let withoutGuillemetsData = str//On rettire les guillemets restantes
        compoData.push(dataStringifyTab[k].replace(/\"/g, "")); //On push en retirant les guillemets restantes dans la string
        //console.log(k);
    }
    

    ++inc;

} else {
    return;
    writeStream.end
}


})
.on('end', () => {


let result = "";
let c = 0;

for(let i in compoData){ 
    //result = result+""+keys[c]+"<br>"+compoData[i]+" <br><br> ";
    //On récupère séparrement la donnée et le nom de sa colonne

    //dataArrayAssociate = { "un" : 1, "deux" : 2, "trois": 3 };

    if(c<keys.length-1){
        c++;
        console.log(keys[c]+" : "+ compoData[i])
        
    }else{
        c=0;
        console.log("------------------------------------------------------------------");
    }

}

//console.table(result);
//console.log(keys[60]+" / "+compoData[60]);
//console.log('CSV file successfully processed');


});