var apiBrcapAws = require('../index.js');


apiBrcapAws.get('https://sqs.sa-east-1.amazonaws.com/798354115863/SQS_A_TESTE_DEV', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        if (data.code == 200) {
            console.log(data.Message.id);
            apiBrcapAws.delete('https://sqs.sa-east-1.amazonaws.com/798354115863/SQS_A_TESTE_DEV', data.ReceiptHandle, function (err, data) {
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