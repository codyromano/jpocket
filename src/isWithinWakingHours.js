const moment = require("moment-timezone");

module.exports = function isWithinWakingHours(date = new Date()) {
  const hours = moment(date)
    .tz("America/Los_Angeles")
    .hours();
  return hours >= 9 && hours <= 22;
};
