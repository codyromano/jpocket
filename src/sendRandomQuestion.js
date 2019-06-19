// TODO: Convert to TypeScript
const twilio = require('twilio');
const credentials = require('../twilioCredentials.json');
const getRandomQuestion = require('../build/getRandomQuestion').default;

const { toNumber, messagingServiceSid, accountSid, authToken } = credentials;
const client = twilio(accountSid, authToken); 
 
client.messages 
  .create({ 
      body: getRandomQuestion(),  
      messagingServiceSid,      
      to: toNumber
    })
    .then(message => console.log(message.sid)) 
    .done();
