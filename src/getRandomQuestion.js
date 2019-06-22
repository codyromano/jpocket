module.exports = () => {
  const questions = [
    `What's the most delicious thing you've eaten?`,
    `What was your greatest challenge?`,
    `With whom do you feel most socially connected?`,
    `What's keeping you up at night?`,
    `How happy do you feel? Why?`,
    `What makes you proud?`,
    `What's your greatest accomplishment today?`,
    `What are you thinking about?`,
    `What have you learned today?`
  ];

  return questions[Math.floor(Math.random() * questions.length)];
};
