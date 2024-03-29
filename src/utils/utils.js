export const getFormattedDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더해줍니다.
  let day = today.getDate();

  // 월과 일이 한 자리 수일 경우 앞에 0을 붙여줍니다.
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  const formattedDate = `${year}${month}${day}`;
  return formattedDate;
};

export const getCurrentTime = () => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // 시간과 분이 한 자리 수일 경우 앞에 0을 붙여줍니다.
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}${minutes}`;
};
