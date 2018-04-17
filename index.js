var SNS = require('./Services/notifications/SNS');
var SQS = require('./Services/notifications/SQS');
var Redis = require('./Services/cache/Redis');

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

exports.Memcached_Get = function (key, host, port, callback){

    Memcached_Get = new Redis(host, port);
    
    Memcached_Get.get(key, function(err, data){
        callback(err, data);
    });
}

exports.Memcached_Post = function (key, value, ttl, host, port, callback){

    Memcached_Post = new Redis(host, port);
    
    Memcached_Post.post(key, value, ttl, function(err, data){
        callback(err, data);
    });
}

exports.Memcached_Delete = function (key, host, port, callback){

    Memcached_Delete = new Redis(host, port);
    
    Memcached_Delete.delete(key, function(err, data){
        callback(err, data);
    });
}