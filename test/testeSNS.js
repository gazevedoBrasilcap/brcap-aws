var BRCAP_SNS = require('../SNS.js');

var payload = {id: 'teste'};

var SNS = new BRCAP_SNS('sa-east-1');

SNS.post('arn:aws:sns:sa-east-1:798354115863:SNS_A_TESTE_DEV', payload, 'Teste de SNS', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});