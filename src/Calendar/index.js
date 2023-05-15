import {
  CalendarHead,
  HeadDay,
  Wrapper,
  SevenColGrid,
  CalendarBody,
  StyledDay,
  StyledEvent
} from "./styled";
import { MONTHS } from "./const";
import {
  areDatesTheSame,
  getDateObj,
  getDaysInMonth,
  getRandomDarkColor,
  getSortedDays,
  range
} from "./utils";

import { useState } from "react";

export const Calendar = ({ startingDate, eventsArr, addEvent }) => {
  const [currentMonth, setCurrentMonth] = useState(startingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(startingDate.getFullYear());
  const DAYSINMONTH = getDaysInMonth(currentMonth, currentYear);

  const nextMonth = () => {
    if (currentMonth < 11) {
      setCurrentMonth((prev) => prev + 1);
    } else {
      setCurrentMonth(0)
      setCurrentYear((prev) => prev + 1)
    }
  };
  const prevMonth = () => {
    if (currentMonth > 0) {
      setCurrentMonth((prev) => prev - 1);
    } else {
      setCurrentMonth(11)
      setCurrentYear((prev) => prev - 1)
    }
  };

  const onAddEvent = (date) => {
    addEvent(date, getRandomDarkColor());
  };

  return (
    <Wrapper>
      <CalendarHead>
        <ion-icon
          onClick={prevMonth}
          name="arrow-back-circle-outline"
        ></ion-icon>
        <p>
          {MONTHS[currentMonth]} {currentYear}
        </p>
        <ion-icon
          onClick={nextMonth}
          name="arrow-forward-circle-outline"
        ></ion-icon>
      </CalendarHead>
      <SevenColGrid>
        {getSortedDays(currentMonth, currentYear).map((day) => (
          <HeadDay>{day}</HeadDay>
        ))}
      </SevenColGrid>
      <CalendarBody>
        {range(DAYSINMONTH).map((day) => (
          <StyledDay
            onClick={() => onAddEvent(getDateObj(day, currentMonth, currentYear))}
            active={
              areDatesTheSame(new Date(), getDateObj(day, currentMonth, currentYear))
            }
          >
            <p>{day}</p>

            {
              eventsArr.map(
                (ev) =>
                  areDatesTheSame(
                    getDateObj(day, currentMonth, currentYear), ev.date
                  ) && <StyledEvent bgColor={ev?.color} > {ev.title}</StyledEvent>
              )
            }
          </StyledDay>
        ))}
      </CalendarBody>
    </Wrapper >
  );
}