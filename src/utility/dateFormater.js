import dayjs from "dayjs";

export const dateFormater = (date) => {
  return dayjs(date).format("DD.MM.YY / H:hh");
};
