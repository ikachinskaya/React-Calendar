import styles from "./calendarBody.module.scss";
import { format } from "date-fns";
import DaysOfWeek from "./DaysOfWeek/daysOfWeek";
import Month from "./Month/month";
import { useContext } from "react";
import { CalendarContext } from "../../../contexts";

const CalendarBody = () => {
  const [currentDay] = useContext(CalendarContext);
  return (
    <div className={styles.container}>
      <div className={styles.month}>{format(currentDay, "LLLL yyyy")} </div>
      <DaysOfWeek />
      <Month />
    </div>
  );
};

export default CalendarBody;
