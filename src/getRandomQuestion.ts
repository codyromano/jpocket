const getRandomQuestion = (): string => {
  const questions: string[] = [
    `What's the most delicious thing you've eaten?`,
    `What was your greatest challenge?`,
    `With whom do you feel most socially connected?`,
    `What's keeping you up at night?`,
    `How happy do you feel? Why?`,
    `What makes you proud?`,
    `What's your greatest accomplishment?`
  ];

  return questions[
    Math.floor(
      Math.random() * questions.length
    )
  ];
};

export default getRandomQuestion;
