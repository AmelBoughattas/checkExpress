function myLogger (req,res,next) {
    
    const hours = new Date().getHours();
    let day = new Date().getDay();
   
    if (day > 0 && day < 6 && hours > 9 && hours < 18){
        console.log("During work");
        next();
    }else{
        console.log("we are closed")
        res.sendFile(__dirname + "/close.html");
    }
}
module.exports = myLogger;