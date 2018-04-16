var BRCAPAWS = require('../index.js');

BRCAPAWS.SQS_Get('https://sqs.sa-east-1.amazonaws.com/798354115863/SQS_A_TESTE_DEV', 'sa-east-1', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        if (data.code == 200) {
            console.log(data.body.id);
            BRCAPAWS.SQS_Delete('https://sqs.sa-east-1.amazonaws.com/798354115863/SQS_A_TESTE_DEV', data.receiptHandle, 'sa-east-1', function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Mensagem apagada com sucesso");
                }
            });
        } else {
            console.log(data.message);
        }
    }
});