var apiBrcapAws = require('../index.js');

var payload = {id: 'teste'};

apiBrcapAws.send('arn:aws:sns:sa-east-1:798354115863:SNS_A_TESTE_DEV', payload, '', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});