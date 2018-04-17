var BRCAPAWS = require('../index.js');


BRCAPAWS.Memcached_Get('Framework', 'brasilcap-dev.i8cxyw.ng.0001.sae1.cache.amazonaws.com', '6379', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});


BRCAPAWS.Memcached_Post('Framework', 'Angular', 'brasilcap-dev.i8cxyw.ng.0001.sae1.cache.amazonaws.com', '6379', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});


BRCAPAWS.Memcached_Delete('Framework', 'brasilcap-dev.i8cxyw.ng.0001.sae1.cache.amazonaws.com', '6379', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});

