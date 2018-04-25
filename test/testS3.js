var BRCAPAWS = require('../index.js');

BRCAPAWS.S3_Get('brasilcap-properties-dev', 'cap-extracao-sorteio', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});
