setInterval(() => {
    var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAT", "THURSDAY", "FRIDAY", "SATURDAY"];
    var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"]

    var d = new Date();
    document.querySelector('.hrs').innerHTML = d.getHours()
    document.querySelector('.mins').innerHTML = d.getMinutes()
    document.querySelector('.secs').innerHTML = d.getSeconds()
    document.querySelector('.ampm').innerHTML = "PM"

    document.querySelector('.day').innerHTML = days[d.getDay()]
    document.querySelector('.currentDate').innerHTML = d.getDate()
    document.querySelector('.month').innerHTML = months[d.getMonth()]
    document.querySelector('.year').innerHTML = d.getFullYear()

    var hr = d.getHours()
    if (hr >= 12) {
        document.querySelector('ampm').innerHTML = "PM"
    }
    else {
        document.querySelector('ampm').innerHTML = "AM"
    }

})