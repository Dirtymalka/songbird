export const randomInteger = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const calculateScore = (prevScore, result) => {
  if (result === true) {
    prevScore += 6;
  };
  prevScore -= 1;
  return prevScore;
};
