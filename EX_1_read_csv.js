const fs = require('fs');
const csv = require('csv-parser');
let inc = 1;
let nbrOutput = 20;
let pair = 0;
 
fs.createReadStream('../data/electronic-card-transactions-december-2022-csv-tables.csv')
  .pipe(csv())
  .on('data', (data) => {
    // Ouverture des 20 premières lignes.
    /*
    if (inc <= nbrOutput) { 
      console.log(data);
      ++inc;
    } else {
      return;
    }*/
    

    //Ouverture de 20 lignes en une ligne sur 2 (1/3)
    /*
    let maxNbrOutput = nbrOutput*2;

    if(inc <= maxNbrOutput && inc%2==0) { 
        console.log(data);
      }
    
    ++inc;
    */

    //Ouverture de 20 lignes en une ligne sur 2 (2/3)
    /*
    let maxNbrOutput = nbrOutput*2;

    if(inc <= maxNbrOutput) { 

        if(pair == 1){  
          console.log(inc);
            pair = 0;
        }else if(pair == 0){
            pair = 1;
        }
      }
    
    ++inc;
    */
 

    //Ouverture de 20 lignes en une ligne sur 2 (3/3)
    /*
    if (inc <= nbrOutput) { 
        console.log(data);
      } else {
        return;
      }
      
      inc = inc+2;*/

      //Écrire dans un fichier
      //Series_reference,Period,Data_value,Suppressed,STATUS,UNITS,Magnitude,Subject,Group,Series_title_1,Series_title_2,Series_title_3,Series_title_4,Series_title_5


  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
