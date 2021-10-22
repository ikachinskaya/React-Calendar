import React from "react";
import { startOfWeek, addDays } from "date-fns";
import styles from "./Week.module.scss";
import Day from "./../Day/day";

const Week = ({ startingDay }) => {
  const startingDate = startOfWeek(startingDay);
  const daysArray = new Array(7).fill(null).map((_, index) => {
    return (
      <Day
        className={styles.days}
        key={index}
        day={addDays(startingDate, index)}
      />
    );
  });

  return <div className={styles.container}>{daysArray}</div>;
};

export default Week;
