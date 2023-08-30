const accountSid = "";
const authToken = "";
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         body: `*Here's that picture* of an owl you requested.`,
         mediaUrl: ['https://demo.twilio.com/owl.png'],
         from: 'whatsapp:+14155238886',
         to: 'whatsapp:+51987335423'
       })
      .then(message => console.log(message.sid));
