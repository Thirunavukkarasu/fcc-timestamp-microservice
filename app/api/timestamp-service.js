
function timeStampConversion(req, res){
    var input = req.params.date;
    var inputDate;
    if(Number(input)){
        input = Number(input) * 1000;
    }

    inputDate= new Date(input);
    var monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var unix = null, natural = null;

    if(inputDate instanceof Date){
        unix = inputDate.getTime()/1000|0;
        natural = monthNames[inputDate.getMonth()]+" "+inputDate.getDate()+", "+inputDate.getFullYear();
    }

    res.send({
        unix    : unix,
        natural : natural
    });
}

module.exports = {
    timeStampConversion : timeStampConversion
};