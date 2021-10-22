import React from "react";
import Week from "./Week/week";
import { addDays, getWeeksInMonth, startOfMonth } from "date-fns";
import { useContext } from "react";
import { CalendarContext } from "../../../../contexts";

const Month = () => {
  const [currentDay] = useContext(CalendarContext);
  const weekAmount = getWeeksInMonth(currentDay);
  const startingDate = startOfMonth(currentDay);

  const daysArray = new Array(weekAmount).fill(null).map((_, index) => {
    return <Week key={index} startingDay={addDays(startingDate, index * 7)} />;
  });
  return <div>{daysArray}</div>;
};

export default Month;
