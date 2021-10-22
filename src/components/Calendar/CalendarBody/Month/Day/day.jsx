import React from "react";
import { format } from "date-fns";
import styles from "./Day.module.scss";
import { useContext } from "react";
import { isSameDay, isSameMonth } from "date-fns/esm";
import cx from "classnames";
import { CalendarContext } from "../../../../../contexts";
const Day = ({ day }) => {
  const [currentDay, setCurrentDay] = useContext(CalendarContext);
  const dayClasses = cx(styles.day, {
    [styles.dayHidden]: !isSameMonth(day, currentDay),
    [styles.selectedDay]: isSameDay(day, currentDay),
  });

  return (
    <div
      onClick={() => {
        setCurrentDay(day);
      }}
      className={dayClasses}
    >
      {format(day, "d")}
    </div>
  );
};

export default Day;
