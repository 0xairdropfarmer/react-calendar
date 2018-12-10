import React from "react";
import moment from "moment";
export default class Calendar extends React.Component {
  weekdayshort = moment.weekdaysShort();

  render() {
    let weekdayshortname = this.weekdayshort.map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });
    return (
      <div className="tail-datetime-calendar">
        <div className="calendar-date">
          <table className="calendar-day">
            <thead>
              <tr>{weekdayshortname}</tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}
