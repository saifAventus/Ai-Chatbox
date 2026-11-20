import dayjs from "dayjs";
import { v4 } from "uuid";

export const genUUID = () => {
  const id = v4();
  return `bz_rg-${id}`;
};

export const genSessionID = () => {
  const id = v4();
  const expiry = dayjs().add(1, "hours").valueOf();
  return `bz_rg-${id}:${expiry}`;
};
