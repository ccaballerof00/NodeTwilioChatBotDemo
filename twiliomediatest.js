const accountSid = "AC5859d2c3ea5c5f7dfd2a020e96578a41";
const authToken = "921b15052dbb6459d0f256267793a540";
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: `*Here's that picture* of an owl you requested.`,
         mediaUrl: ['https://demo.twilio.com/owl.png'],
         from: 'whatsapp:+14155238886',
         to: 'whatsapp:+51987335423'
       })
      .then(message => console.log(message.sid));
