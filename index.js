const fs = require('fs');
let codes = [];
var xboxlive = xboxlive
function xboxlive(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

};

    for (let i = 0; 1000000 > i; i++)
    {
        codes.push(`${xboxlive(5)}-${xboxlive(5)}-${xboxlive(5)}`);
    }
    fs.writeFile(`./codes/${xboxlive(5)}.txt`, codes.join('\n'), (err) => {
        if (err)
        {
            throw err;
        }
    })  


