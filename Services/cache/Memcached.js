var RedisClient = require('redis');

var redis;

module.exports = class Mencached {

    constructor(host, port) {
        redis = RedisClient.createClient(port, host);
    }

    get(key, callback) {
        redis.get(key, function (err, reply) {
            callback(err, reply);
        });

        redis.quit();
    }

    post(key, value, callback) {
        redis.set(key, value, 'EX', 50, function (err, reply) {
            callback(err, reply);
        });

        redis.quit();
    }

    delete(key, callback) {
        redis.del(key, function (err, reply) {
            callback(err, reply);
        });

        redis.quit();
    }
}