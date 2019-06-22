const twilio = require("twilio");

const isLucky = require("./src/isLucky");
const isWithinWakingHours = require("./src/isWithinWakingHours");
const getRandomQuestion = require("./src/getRandomQuestion");
const credentials = require("./credentials");

exports.handler = (event, context, callback) => {
  const { toNumber, messagingServiceSid, accountSid, authToken } = credentials;
  const client = twilio(accountSid, authToken);
  const question = getRandomQuestion();

  if (!isWithinWakingHours()) {
    callback(null, `Refusing to send SMS because it is outside waking hours`);
    return;
  }
  if (!isLucky()) {
    callback(null, `Refusing to send SMS because of random chance`);
    return;
  }

  client.messages
    .create({
      body: question,
      messagingServiceSid,
      to: toNumber
    })
    .then(message => {
      const result = `Sent "${question}" to ${toNumber}`;
      console.log(result);
      callback(null, result);
    })
    .done();
};
