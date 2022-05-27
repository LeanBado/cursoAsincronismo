function date (callback){ //el argumento callback es sólo una convención y no una palabra reservada
    console.log(`primer fecha ${new Date}`)
    setTimeout(function(){
        date = new Date;
        callback(date);
    }, 3000)
}

function otraFecha(otraDate){
    console.log(`segunda fecha ${otraDate}`);
}

date(otraFecha)


