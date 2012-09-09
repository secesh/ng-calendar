//Copyleft 2012 ChaseFox (Matthew R Chase)
Date.prototype.getMonthDays = function(){
    /***************************************************************
     * This function returns the number of days in the month of the
     * instance of the Date object.
     *
     * Example:
     *     var date = new Date(2012, 1, 7) //Oh how I hate --month
     *     alert("There are " + date.getMonthDays() +
     *           " days in February 2012")
     **************************************************************/
    var days_in_months = [
        31, //JAN
        28, //FEB - Calculate leap year below.
        31, //MAR
        30, //APR
        31, //MAY
        30, //JUN
        31, //JUL
        31, //AUG
        30, //SEP
        31, //OCT
        30, //NOV
        31  //DEC
    ]
    var month = this.getMonth()
    var year  = this.getYear()
    
    var days = days_in_months[month]
    
    var is_leap = (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
    if(days == 28 && is_leap) days = 29
    
    return days
}
Date.prototype.getDayEng = function(){
    var day  = this.getDay()
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return days[day]
}
Date.prototype.getDayEngShort = function(){
    var day  = this.getDay()
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    return days[day]
}
Date.prototype.getDatePad = function(){
    //I could improve pad's options, but all I want is a single 0 prefix.
    var date = this.getDate()
    if(date < 10) date = "0" + date
    return date
}

Date.prototype.getMonthEng = function(){
    var month = this.getMonth()
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[month]
}
Date.prototype.getMonthEngShort = function(){
    var month = this.getMonth()
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return months[month]
}

Date.prototype.getMonthPrevious = function(){
    var month = this.getMonth()
    var year  = this.getFullYear()
    month -= 1
    if(month < 0){ month = 11; year -= 1}
    /***************************************************************
     * Both the year and the month are required.  object literals
     * are way cooler than remembering what order arrays come in!
     **************************************************************/
    return({year: year, month: month})
}
Date.prototype.getMonthNext = function(){
    var month = this.getMonth()
    var year  = this.getFullYear()
    month += 1
    if(month > 11){ month = 0; year += 1}
    /***************************************************************
     * Both the year and the month are required.  object literals
     * are way cooler than remembering what order arrays come in!
     **************************************************************/
    return({year: year, month: month})
}
Date.prototype.getRealMonth = function(){
    /***************************************************************
     * Careful with this!  Javascript stupidly uses months 0-11, so
     * this function should ONLY be used for displaying to the user.
     * do not take this value and try to make a new Date() with it.
     **************************************************************/
    var month = this.getMonth()
    return month+1
}
Date.prototype.getRealMonthPad = function(){
    var month = this.getRealMonth()
    if(month < 10) month = "0" + month
    return month
}
Date.prototype.getYear = function(){
    /***************************************************************
     * This is one thing I agree with IE on.  There's no reason
     * not to use the full year.  Didn't anybody other than
     * microsoft learn anything from Y2K?!?!
     **************************************************************/
    return this.getFullYear()
}
var week_days_short = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
var week_days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var months_short = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
