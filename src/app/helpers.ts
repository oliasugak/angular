export const getTimeString = (date: Date) => {
  return `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
};

const formatTime = (number: number) => {
  return String(number).length > 1
    ? `${number}`
    : `0${number}`;
};
