var BRCAPAWS = require('../index.js');

var payload = {id: 'teste'};

BRCAPAWS.SNS_Post('arn:aws:sns:sa-east-1:798354115863:SNS_A_TESTE_DEV', payload, 'Teste de SNS', 'sa-east-1', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});
