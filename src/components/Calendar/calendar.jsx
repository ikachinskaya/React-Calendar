import React, { useState } from "react";
import styles from "./calendar.module.scss";
import SelectedDay from "./SelectedDay/selectedDay";
import CalendarBody from "./CalendarBody/calendarBody";
import { CalendarContext } from "../../contexts";

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());

  return (
    <article className={styles.container}>
      <CalendarContext.Provider value={[currentDay, setCurrentDay]}>
        <SelectedDay />
        <CalendarBody />
      </CalendarContext.Provider>
    </article>
  );
};

export default Calendar;
