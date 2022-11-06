module.exports.reply=function(message){
    this.bot_Experience = 21;
    this.Bot_Name = "ABC Hospital";
    this.Bot_DoctorName = "XYZ";
    this.Bot_Nationality = "INDIA";

    message = message.toLowerCase();

    if(message.indexOf("hi") > -1 || message.indexOf("hello") > -1){
        return "Hi! Welcome to the "+ this.Bot_Name +", How can i help you?";
    }else if(message.indexOf("what") > -1 && message.indexOf("is") > -1 && message.indexOf("your") > -1 && message.indexOf("hospital") > -1 && message.indexOf("time?") > -1){
        return "hospital time is 10:00 am to 11:00 pm"; 
    }else if(message.indexOf("can") > -1 && message.indexOf("i") && message.indexOf("meet") && message.indexOf("doctor") && message.indexOf("today")){
        return "Yes! you can meet "+ this.Bot_DoctorName+ "dr.";
    }else if(message.indexOf("how") > -1 && message.indexOf("much") && message.indexOf("doctor") && message.indexOf("experience")){
            return " Doctor Experience is " + this.bot_Experience;
    }
        return "Sorry I didn't get it :("
}