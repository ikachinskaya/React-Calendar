import styles from "./selectedDay.module.scss";
import { format } from "date-fns";
import { useContext } from "react";
import { CalendarContext } from "../../../contexts";

const SelectedDay = () => {
  const [currentDay] = useContext(CalendarContext);
  return (
    <div className={styles.container}>
      <div className={styles.dayOfWeek}>{format(currentDay, "EEEE")}</div>
      <div className={styles.day}>{format(currentDay, "d")}</div>
    </div>
  );
};

export default SelectedDay;
