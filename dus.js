const events = require(__dirname + "/events.json");

FgBlack = "\x1b[30m"
FgRed = "\x1b[31m"
FgGreen = "\x1b[32m"
FgYellow = "\x1b[33m"
FgBlue = "\x1b[34m"
FgMagenta = "\x1b[35m"
FgCyan = "\x1b[36m"
FgWhite = "\x1b[37m"

const diff = (e) => {

    for(var i of e){
        
        d_until = ((new Date(i.date) -  new Date()) / (1000*60*60*24)).toString().slice(0,2);
        
        function condformat(d_until){
            if( d_until >= 30){
                return FgGreen
            }
            else if(d_until >= 15) {
                return FgYellow
            }
            else {
                return FgRed
            }
        }

        var color = condformat(d_until);

        console.log(`${color}${d_until}\x1b[0m Days Until ${i.name} - ${i.icon} `);
    }
}

diff(events);