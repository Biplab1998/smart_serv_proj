const date = (str) => {
  let date = str.substring(0, 10);
  let day = date.substring(8, 10);
  let mon = date.substring(5, 7);
  let year = date.substring(0, 4);
  return `${day} / ${mon} / ${year}`;
};

export default date;
