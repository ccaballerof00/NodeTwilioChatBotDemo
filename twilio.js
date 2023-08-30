const accountSid = "";
const authToken = "";
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
