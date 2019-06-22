module.exports = () => {
  const questions = [
    `What's the most delicious thing you've eaten?`,
    `What was your greatest challenge?`,
    `With whom do you feel most socially connected?`,
    `What's keeping you up at night?`,
    `What makes you proud?`,
    `What's your greatest accomplishment today?`,
    `What are you thinking about?`,
    `What have you learned today?`,
    `How many calories have you consumed today?`,
    `How much alcohol did you drink yesterday?`,
    `What kind of exercise have you done today?`,
    `To where have you physically moved today?`,
    `What have you learned recently?`,
    `How do you feel about your living space?`,
    `How productive is your day?`,
    `What's something funny?`,
    `What kind of adventure sounds exciting?`,
    `How much money have you spent today?`,
    `What's the last movie you watched?`,
    `Do you feel healthy?`,
    `What's the first thing that comes to mind?`,
    `How would you rate your happiness (1-10) In a few words, why?`,
    `When's the last time you had fun?`,
    `What's the first goal that pops into your head?`,
    `What are you doing right now?`,
    `What's scaring you?`,
    `What's inspiring you?`,
    `How do you feel physically?`,
    `What's the last thing you ate?`,
    `If you could travel back in time today, what would you do differently?`
  ];

  return questions[Math.floor(Math.random() * questions.length)];
};
