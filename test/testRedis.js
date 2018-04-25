var BRCAPAWS = require('../index.js');


BRCAPAWS.Redis_Get('Framework', 'brasilcap-dev.i8cxyw.ng.0001.sae1.cache.amazonaws.com', '6379', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});


BRCAPAWS.Redis_Post('Framework', 'Angular', 1, 'brasilcap-dev.i8cxyw.ng.0001.sae1.cache.amazonaws.com', '6379', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});


BRCAPAWS.Redis_Delete('Framework', 'brasilcap-dev.i8cxyw.ng.0001.sae1.cache.amazonaws.com', '6379', function(err, data){
    if (err){
        console.log(err);
    }else{
        console.log(data);
    }
});

