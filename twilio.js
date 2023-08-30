const accountSid = "AC5859d2c3ea5c5f7dfd2a020e96578a41";
const authToken = "921b15052dbb6459d0f256267793a540";
const client = require('twilio')(accountSid, authToken);

function sendTextMessage(receiver, message){
    return new Promise((resolve, reject) => {
        client.messages
        .create({
           from: 'whatsapp:+14155238886',
           body: message,
           to: 'whatsapp:+'+ receiver
         })
        .then(message => resolve())
        .catch((err)=>reject(err));
    })
}

module.exports={
    sendTextMessage
}