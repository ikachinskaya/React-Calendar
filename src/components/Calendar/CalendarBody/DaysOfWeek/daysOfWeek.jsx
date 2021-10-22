import React from "react";
import styles from "./DaysOfWeek.module.scss";
import { format, startOfWeek, addDays } from "date-fns";
import { useContext } from "react";
import { CalendarContext } from "../../../../contexts";

const DaysOfWeek = () => {
  const [currentDay] = useContext(CalendarContext);
  const startingDate = startOfWeek(currentDay);
  const daysArray = new Array(7).fill(null).map((_, index) => {
    return (
      <div className={styles.day} key={index}>
        {format(addDays(startingDate, index), "EEEEE")}
      </div>
    );
  });
  return <div className={styles.daysOfWeek}>{daysArray}</div>;
};

export default DaysOfWeek;
