onmessage = function(event) {
    var count=0;
    for (let index = 0; index < 10000000000; index++) {
        count++;
        
    }
    postMessage(count);
};