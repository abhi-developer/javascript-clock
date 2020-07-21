function showTime() {
    let date = new Date();
    // let time = date.toLocaleTimeString();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // to format with AM, PM
    let formatHour = hourFormat(hours);

    // to show time from 1 to 12 
    let cycle1TO12 = changeHour(hours);
    hours = cycle1TO12;

    // to add zero before hour, minute, and second if it is less than 10
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    // print time
    document.getElementById('clock').innerHTML = `${hours}: ${minutes}: ${seconds} ${formatHour}`;
}

function hourFormat(hours) {
    formateHour = 'AM';
    if (hours >= 12) {
        formateHour = 'PM';
    }
    return formateHour;
}

function changeHour(hours) {
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }
    return hours;
}

function addZero(_0_for_H_M_S) {
    if (_0_for_H_M_S < 10) {
        _0_for_H_M_S = '0' + _0_for_H_M_S;
    }
    return _0_for_H_M_S;
}

showTime();
setInterval(showTime, 1000);