function updateClock() {

    const now = new Date();
    let day = now.getDay(),
        month = now.getMonth(),
        date = now.getDate(),
        year = now.getFullYear(),
        hour = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds(),
        period = "AM";

    if (hour === 0) {
        hour = 12;
    }

    if (hour > 12) {
        hour = hour - 12;
        period = 'PM';
    }
    Number.prototype.pad = function (value) {
        let i;
        for (i = this.toString(); i.length < value; i = 0 + i) ;
        return i;
    }

    const months = ['January', 'February', 'Match', 'April', 'May',
        'June', 'July', 'August', 'September', 'October',
        'November', 'December'];
    const weak = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday'];

    const ids = ['dayName', 'month', 'dayNum', 'year', 'hour', 'minutes', 'seconds', 'period'];

    let value = [weak[day], months[month], date.pad(2), year, hour.pad(2), min.pad(2), sec.pad(2), period];

    for (let i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = value[i];
    }
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);

}
