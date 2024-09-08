class DateService {

  constructor() {
    this.today = new Date();
    this.dayStrRepArr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    this.dayNamesLong = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.monthNamesShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    this.monthNamesLong = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
    //temp implementation
    this.OClocks24 = Array.from({ length: 24 }, (_, i) => {
      // i++;
      const strRep = i / 10 < 1 ? `0${i}:00` : `${i}:00`;
      return strRep;
    })
  }

  // getDaysCountInMonth :: (Num, Num) -> Num
  getDaysCountInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    //CF https://stackoverflow.com/a/1184359
    return new Date(year, month + 1, 0).getDate();
  }

  // getDaysInMonth :: (Num, Num) -> [Num]
  getDaysInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    return Array.from({ length: this.getDaysCountInMonth(year, month) }, (_, i) => {
      return new Date(year, month, i).getDay();
    });
  }

  // getNamedDaysInMonth :: (Num, Num) -> [String]
  getNamedDaysInMonth(year = this.today.getFullYear(), month = this.today.getMonth()) {
    return this.getDaysInMonth(year, month).map(dayNumber => this.dayStrRepArr[dayNumber]);
  }

  //getNextMonth :: (Num, Num) -> {String: Num, String: Num, String: String, String: String}
  getNextMonth(year, month) {
    if (month < 11) {
      return {
        year,
        month: month + 1,
        monthNameShort: this.monthNamesShort[month + 1],
        monthNameLong: this.monthNamesLong[month + 1]
      }
    } else {
      return {
        year: year + 1,
        month: 0,
        monthNameShort: "Jan",
        monthNameLong: "January"
      }
    }
  }

  // getPrevMonth :: (Num, Num) -> {String: Num, String: Num, String: String, String: String}
  getPrevMonth(year, month) {
    if (month > 0) {
      return {
        year,
        month: month - 1,
        monthNameShort: this.monthNamesShort[month - 1],
        monthNameLong: this.monthNamesLong[month - 1]
      }
    } else {
      return {
        year: year - 1,
        month: 11,
        monthNameShort: "Dec",
        monthNameLong: "December"
      }
    }
  }
  getNextDay(year, month, day) {
    let nextDayObj = new Date(year, month, day + 1)
    const nextDaysMonth = nextDayObj.getMonth();
    return {
      year: nextDayObj.getFullYear(),
      month: nextDaysMonth,
      day: nextDayObj.getDate(),
      monthNameShort: this.monthNamesShort[nextDaysMonth],
      monthNameLong: this.monthNamesLong[nextDaysMonth]
    }
  }

  getPrevDay(year, month, day) {
    let prevDayObj = new Date(year, month, day - 1)
    const prevDaysMonth = prevDayObj.getMonth();
    return {
      year: prevDayObj.getFullYear(),
      month: prevDaysMonth,
      day: prevDayObj.getDate(),
      monthNameShort: this.monthNamesShort[prevDaysMonth],
      monthNameLong: this.monthNamesLong[prevDaysMonth]
    }
  }
  getDateOneWeekBeforeDay(year, month, day) {
    const prevWeekObj = new Date(year, month, day - 7);
    const prevWeekMonth = prevWeekObj.getMonth();
    return {
      year: prevWeekObj.getFullYear(),
      month: prevWeekMonth,
      day: prevWeekObj.getDate(),
      monthNameShort: this.monthNamesShort[prevWeekMonth],
      monthNameLong: this.monthNamesLong[prevWeekMonth]
    }
  }
  getDateOneWeekFromDay(year, month, day) {
    const nextWeekObj = new Date(year, month, day + 7);
    const nextWeekMonth = nextWeekObj.getMonth();
    return {
      year: nextWeekObj.getFullYear(),
      month: nextWeekMonth,
      day: nextWeekObj.getDate(),
      monthNameShort: this.monthNamesShort[nextWeekMonth],
      monthNameLong: this.monthNamesLong[nextWeekMonth]
    };
  }
  // getMonthStr :: Num -> String
  getMonthStr(month) {
    return this.monthNamesShort[month];
  }

  //getDayStr :: Num -> String mon=0 convention
  getDayStr(day) {
    return this.dayStrRepArr[day];
  }

  //converts day to mon=0 from sun=0
  convertDay(dayPrev) {
    if (dayPrev === 0)
      dayPrev = 7;
    return dayPrev - 1;
  }

  // getWeekOfDay_startingFromJan1st() {

  // }

  getDatesInWeekAroundDay_weeksIndexedAtMonday(year, month, day) {

  }
  // dateOfFirstMondayInMonth :: (Number, Number) -> Number
  dateOfFirstMondayInMonth(year, month) {
    const dayOfWeekForFirst7DaysInMonth = [1, 2, 3, 4, 5, 6, 7].map(date => {
      return new Date(year, month, date).getDay();
    });
    return dayOfWeekForFirst7DaysInMonth.indexOf(1) + 1;
  }
  //datesOfAllMondaysInMonth :: (Number, Number) -> [Number]
  datesOfAllMondaysInMonth(year, month) {
    const first = this.dateOfFirstMondayInMonth(year, month);
    let i = first;
    const mondaysArr = [];
    while (i <= this.getDaysCountInMonth(year, month)) {
      mondaysArr.push(i);
      i += 7;
    }
    return mondaysArr;
  }
  // Doesn't work for rolling back the year yet
  //getFirstMondayPreviousOrEqualToDay :: (Number, Number, Number) -> Object
  getFirstMondayPreviousOrEqualToDay(year, month, day) {
    // Return object's shape:
    const prevMondayDate = {
      year,
      month,
      day
    }
    const mondaysInMonth = this.datesOfAllMondaysInMonth(year, month);
    // const daysInMonth = this.getDaysCountInMonth(year, month, day);
    if (new Date(year, month, day).getDay() === 1) {
      //Given day is a Monday
      return prevMondayDate;
    } else if (day <= 6) {
      // Within the first week of the month
      if (mondaysInMonth.every(mondayDate => mondayDate > day)) {
        // Theres no mondayDate within the first 6 days, whose date is less than day, so
        // get the last monday of the previous month
        const previousMonthMondayDates = this.datesOfAllMondaysInMonth(year, month - 1);
        const lastMonday = previousMonthMondayDates[previousMonthMondayDates.length - 1];
        prevMondayDate.day = lastMonday;
        prevMondayDate.month = month - 1 > 0 ? month - 1 : 11
      } else {
        // There was a monday within the first week, before the day
        prevMondayDate.day = mondaysInMonth[0];
      }
    } else {
      // Any day outside of the first week of the month
      for (let i = 0; i < mondaysInMonth.length; i++) {
        if (mondaysInMonth[i + 1] > day) {
          prevMondayDate.day = mondaysInMonth[i];
          break;
        }
      }
    }
    return prevMondayDate;
  }

}

const dateService = new DateService();
export default dateService;
