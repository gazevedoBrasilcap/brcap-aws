var SNS = require('./Services/notifications/SNS');
var SQS = require('./Services/notifications/SQS');

exports.SNS_Post = function (snsURL, payload, subject, region, callback){
    SNS_Post = new SNS(region);
    
    SNS_Post.post(snsURL, payload, subject, function(err, data){
        callback(err, data);
    });
}

exports.SQS_Get = function (queueURL, region, callback){
    SQS_Get = new SQS(region);

    SQS_Get.get(queueURL, function(err, data){
        callback(err, data);
    });
}

exports.SQS_Delete = function (queueURL, receiptHandle, region, callback){

    SQS_Delete = new SQS(region);
    
    SQS_Delete.delete(queueURL, receiptHandle, function(err, data){
        callback(err, data);
    });
}