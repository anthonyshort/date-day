var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

var short = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

module.exports = function(date) {
  var day = date.getDay();
  return {
    full: function(){
      return days[day];
    },
    short: function(){
      return short[day];
    }
  };
};