/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
export default function formatDate(timestamp) {
  const date = new Date(timestamp);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formatTime = (x) => (x < 10 ? `0${x}` : x);

  return `${formatTime(hours)}:${formatTime(minutes)} ${formatTime(day)}.${formatTime(
    month
  )}.${year}`;
}