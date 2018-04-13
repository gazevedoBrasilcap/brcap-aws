// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({ region: 'sa-east-1' });

// Create an SQS service object
var sqs = new AWS.SQS({ apiVersion: '2012-11-05', httpOptions: { timeout: 25000 } });
var sns = new AWS.SNS({ apiVersion: '2012-11-05', httpOptions: { timeout: 25000 } });

exports.get = function (queueURL, callback) {

    if (queueURL === undefined || queueURL === null || queueURL === '') {
        callback("queueURL missing or in a invalid state.", null);
    } else {
        var params = {
            AttributeNames: [
                "SentTimestamp"
            ],
            MaxNumberOfMessages: 1,
            MessageAttributeNames: [
                "All"
            ],
            QueueUrl: queueURL,
            VisibilityTimeout: 0,
            WaitTimeSeconds: 20
        };

        sqs.receiveMessage(params, function (err, data) {           
            if (data.Messages) {

                let retorno = {};
                retorno.body = JSON.parse(JSON.parse(data.Messages[0].Body).Message);
                retorno.receiptHandle = data.Messages[0].ReceiptHandle;
                retorno.code = 200;
                retorno.message = 'message found';

                callback(err, retorno);
            } else {
                callback(err, {'code': 204, 'message' : 'empty queue'});
            }

        });
    }
}

exports.delete = function (queueURL, receiptHandle, callback) {

    console.log('chamou apagar')

    if (queueURL === undefined || queueURL === null || queueURL === '') {
        callback("queueURL missing or in a invalid state.", null);
    } else if (receiptHandle === undefined) {
        callback("queueURL missing or in a invalid state.", null);
    } else {
        var deleteParams = {
            QueueUrl: queueURL,
            ReceiptHandle: receiptHandle
        };
        sqs.deleteMessage(deleteParams, function (err, data) {
            callback(err, data);
        });
    }
}

exports.send = function (snsURL, payload, subject, callback) {

    if (payload === undefined || payload === null || payload === '') {
        callback("payload missing or in a invalid state.", null);
    } else if (snsURL === undefined || snsURL === null || snsURL === '') {
        callback("snsURL missing or in a invalid state.", null);
    } else if (subject === undefined || subject === null || subject === '') {
        callback("subject missing or in a invalid state.", null);
    }else {
        // then have to stringify the entire message payload
        payload = JSON.stringify(payload);

        console.log('sending message:', payload);
        sns.publish({
            Message: payload,
            MessageStructure: 'text',
            TargetArn: snsURL,
            Subject: subject,
        }, function (err, data) {
            callback(err, data);
        });
    }
}