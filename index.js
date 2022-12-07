
//-------------local host name----------------
let nowName;
if (localStorage.getItem("UserName") === null) {
    var UserName1 = prompt("Enter your Name");
    if (UserName1.length < 3) {
        console.log("Invalid Input !!");
    }
    else {
        localStorage.setItem("UserName", UserName1);
    }
    document.getElementById("UserName").innerHTML =UserName1 ;
}
else {
    nowName = localStorage.getItem("UserName");
    document.getElementById("UserName").innerHTML = nowName;
}
// +++++++++++++++++++++++++++++++++++
// function CustomPrompt() {
//     this.render = function (dialog, func) {
//         var winW = window.innerWidth;
//         var winH = window.innerHeight;
//         var dialogoverlay = document.getElementById('dialogoverlay');
//         var dialogbox = document.getElementById('dialogbox');
//         dialogoverlay.style.display = "block";
//         dialogoverlay.style.height = winH + "px";
//         dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
//         dialogbox.style.top = "100px";
//         dialogbox.style.display = "block";
//         document.getElementById('dialogboxhead').innerHTML = "A value is required";
//         document.getElementById('dialogboxbody').innerHTML = dialog;
//         document.getElementById('dialogboxbody').innerHTML += '<br><input id="prompt_value1">';
//         document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Prompt.ok(\'' + func + '\')">OK</button> <button onclick="Prompt.cancel()">Cancel</button>';
//     }
//     this.cancel = function () {
//         document.getElementById('dialogbox').style.display = "none";
//         document.getElementById('dialogoverlay').style.display = "none";
//     }
//     this.ok = function (func) {
//         var prompt_value1 = document.getElementById('prompt_value1').value;
//         window[func](prompt_value1);
//         document.getElementById('dialogbox').style.display = "none";
//         document.getElementById('dialogoverlay').style.display = "none";
//     }
// }var Prompt = new CustomPrompt();
//==============edit Name=================

var btn = document.getElementById("editLogo");
btn.addEventListener("click", () => {
    var UserName2=prompt("Enter your Name",nowName);
    if (UserName2.length<3) {
        console.log("Invalid Input !!");
    }
    else{
        localStorage.setItem("UserName",UserName2);
    }
    nowName=localStorage.getItem("UserName");
    document.getElementById("UserName").innerHTML=nowName;

})


// ----------TimeLine----------

let maintime = document.getElementById("mainTime");
const myDate = () => {
    const d = new Date();
    let hour = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let day = d.getDay();
    if (day == 1)
        day = "MON";
    else if (day == 2)
        day = "TUES";
    else if (day == 3)
        day = "WED";
    else if (day == 4)
        day = "THU";
    else if (day == 5)
        day = "FRI";
    else if (day == 6)
        day = "SAT";
    else
        day = "SUN";
    if (hour < 10) { hour = "0" + hour }
    if (min < 10) { min = "0" + min }
    if (sec < 10) { sec = "0" + sec }
    if (hour > 12) {
        hour = hour % 12;
        if (hour < 10) { hour = "0" + hour }
        maintime.innerHTML = "(" + day + ") " + hour + ":" + min + ":" + sec + " p.m.";
    }
    else {
        maintime.innerHTML = "(" + day + ") " + hour + ":" + min + ":" + sec + " a.m.";
    }
}
myDate();
setInterval(myDate, 1000);


// -------------Logicssss--------------

const d = new Date();
let hour = d.getHours();
let min = d.getMinutes();
let day = d.getDay();
let time = hour + min / 100;
// console.log(day,time);
let fp = document.getElementById("firstPeriod");
let ft = document.getElementById("firstTime");
let sp = document.getElementById("secondPeriod");
let st = document.getElementById("secondTime");

if (day == 1) {
    if (time < 15.20 && time > 14.25) {
        fp.innerHTML = ("CLAB RoomNo:466(A1)||CLAB RoomNo:465(A2)");
        ft.innerHTML = ("02:25 - 03:20");
        sp.innerHTML = ("Tommorow:-Classes: COA RoomNo:112");
        st.innerHTML = ("(TUES)09:50 - 10:45");
    }
    else if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("CLAB RoomNo:466(A1)||CLAB RoomNo:465(A2)");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("CLAB RoomNo:466(A1)||CLAB RoomNo:465(A2)");
        st.innerHTML = ("02:25 - 03:20");
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("OS || RoomNo:334");
        ft.innerHTML = ("12:35 - 01.30");
        sp.innerHTML = ("CLAB RoomNo:466(A1)||CLAB RoomNo:465(A2)");
        st.innerHTML = ("01:30 - 02:25");
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("MACA || RoomNo:334");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("OS || RoomNo:334");
        st.innerHTML = ("12:35 - 01.30");
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("MACA || RoomNo:334");
        st.innerHTML = ("11:40 - 12.35");
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("ENGLISH || RoomNo:334");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("LUNCH -> MACA || RoomNo:334");
        st.innerHTML = ("11:40 - 12.35");
    }
    else if (time < 9.50 && time > 8.55) {
        fp.innerHTML = ("COA || RoomNo:334");
        ft.innerHTML = ("08:55 - 09.50");
        sp.innerHTML = ("ENGLISH || RoomNo:334");
        st.innerHTML = ("09:50 - 10:45");
    }
    else if (time < 8.55) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("COA || RoomNo:334");
        st.innerHTML = ("(MON)08:55 - 09:50");
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Tommorow Classes: \n COA RoomNo:112");
        st.innerHTML = ("(TUES)09:50 - 10:45");
    }
}
else if (day == 2) {
    if (time < 15.20 && time > 14.25) {
        fp.innerHTML = ("OS || RoomNo:334");
        ft.innerHTML = ("02:25 - 03:20");
        sp.innerHTML = ("Tommorow Classes: COA RoomNo:112");
        st.innerHTML = ("(WED)08:55 - 09:50");
    }
    else if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("NETWORK || RoomNo:334");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("OS || RoomNo:466");
        st.innerHTML = ("02:25 - 03:20");
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("12:35 - 01.30");
        sp.innerHTML = ("NETWORK || RoomNo:334");
        st.innerHTML = ("01:30 - 02:25");
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("C Programming || RoomNo:112");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("LUNCH -> NETWORK || RoomNo:334");
        st.innerHTML = ("01.30 - 02:25");
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("ENGLISH || RoomNo:112");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("C Programming || RoomNo:112");
        st.innerHTML = ("11:40 - 12.35");
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("COA || RoomNo:112");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("ENGLISH || RoomNo:112");
        st.innerHTML = ("10:45 - 11.40");
    }
    else if (time < 9.50) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("COA || RoomNo:112");
        st.innerHTML = ("(TUES))09:50 - 10:45");
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Tommorow Classes: COA RoomNo:112");
        st.innerHTML = ("(WED)08:55 - 09:50");
    }
}
else if (day == 3) {
    if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("C Programming || RoomNo:334");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("--NO CLASSES--");
        st.innerHTML = ("");
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("OS-LAB(A1) RoomNo:466||LCS-LAB(A2) RoomNo:309(A)");
        ft.innerHTML = ("12:35 - 01.30");
        sp.innerHTML = ("C Programming || RoomNo:334");
        st.innerHTML = ("01:30 - 02:25");
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("OS-LAB(A1) RoomNo:466 LCS-LAB(A2) RoomNo:309(A)");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("OS-LAB(A1) RoomNo:466 LCS-LAB(A2) RoomNo:309(A)");
        st.innerHTML = ("12:35 - 01.30");
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("OS-LAB(A1) RoomNo:466 LCS-LAB(A2) RoomNo:309(A)");
        st.innerHTML = ("11:40 - 12.35");
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("MACA || RoomNo:112");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("LUNCH -> OS-LAB(A1) RoomNo:466 LCS-LAB(A2) RoomNo:309(A)");
        st.innerHTML = ("11:40 - 12.35");
    }
    else if (time < 9.50 && time > 8.55) {
        fp.innerHTML = ("COA || RoomNo:112");
        ft.innerHTML = ("08:55 - 09.50");
        sp.innerHTML = ("MACA || RoomNo:112");
        st.innerHTML = ("09:50 - 10:45");
    }
    else if (time < 8.55) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("COA || RoomNo:112");
        st.innerHTML = ("(WED)08:55 - 09:50");
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Tommorow Classes: CLAB RoomNo:466(A1)||CLAB RoomNo:465(A2)");
        st.innerHTML = ("(THU)08:00 - 08:55");
    }
}
else if (day == 4) {
    if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("ENGLISH || RoomNo:112");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("--NO CLASSES--");
        st.innerHTML = ("");
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("NETWORK || RoomNo:112");
        ft.innerHTML = ("12:35 - 01.30");
        sp.innerHTML = ("ENGLISH || RoomNo:112");
        st.innerHTML = ("01:30 - 02:25");
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("NETWORK || RoomNo:112");
        st.innerHTML = ("12:35 - 01.30");
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("MACA || RoomNo:334");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("LUNCH -> NETWORK || RoomNo:112");
        st.innerHTML = ("12:35 - 01.30");
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("OS || RoomNo:334");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("MACA || RoomNo:334");
        st.innerHTML = ("10:45 - 11.40");
    }
    else if (time < 9.50 && time > 8.55) {
        fp.innerHTML = ("CLAB RoomNo:466(A1)||CLAB RoomNo:465(A2)");
        ft.innerHTML = ("08:55 - 09.50");
        sp.innerHTML = ("OS || RoomNo:334");
        st.innerHTML = ("09:50 - 10:45");
    }
    else if (time < 8.55 && time > 8.00) {
        fp.innerHTML = ("CLAB RoomNo:466(A1) CLAB RoomNo:465(A2)");
        ft.innerHTML = ("08:00 - 08.55");
        sp.innerHTML = ("CLAB RoomNo:466(A1) CLAB RoomNo:465(A2)");
        st.innerHTML = ("08:55 - 09:50");
    }
    else if (time < 8.55) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("CLAB RoomNo:466(A1) CLAB RoomNo:465(A2)");
        st.innerHTML = ("(THU)08:00 - 09:50");
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Tommorow Classes: MACA RoomNo:112");
        st.innerHTML = ("(FRI)09:50 - 10:45");
    }
}
else if (day == 5) {
    if (time < 15.20 && time > 14.25) {
        fp.innerHTML = ("NETWORK || RoomNo:334");
        ft.innerHTML = ("02:25 - 03:20");
        sp.innerHTML = ("--NO CLASSES--");
        st.innerHTML = ("");
    }
    else if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("C Programming || RoomNo:334");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("NETWORK || RoomNo:334");
        st.innerHTML = ("02:25 - 03:20");
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("(A1)LCS-LAB RoomNo:309(a)||OS-LAB RoomNo:466(A2)");
        ft.innerHTML = ("12:35 - 01.30");
        sp.innerHTML = ("C Programming || RoomNo:334");
        st.innerHTML = ("01:30 - 02:25");
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("(A1)LCS-LAB RoomNo:309(a)||OS-LAB RoomNo:466(A2)");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("(A1)LCS-LAB RoomNo:309(a)||OS-LAB RoomNo:466(A2)");
        st.innerHTML = ("12.35 - 01:30");
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("(A1)LCS-LAB RoomNo:309(a) || OS-LAB RoomNo:466(A2)");
        st.innerHTML = ("11:40 - 01:30");
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("MACA || RoomNo:112");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("LUNCH -> (A1)LCS-LAB RoomNo:309(a) || OS-LAB RoomNo:466(A2)");
        st.innerHTML = ("11:40 - 01.30");
    }
    else if (time < 9.50) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("MACA || RoomNo:112");
        st.innerHTML = ("(FRI)09:50 - 10:45");
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Next Classes: COA RoomNo:334");
        st.innerHTML = ("(MON)08:55 - 09:50");
    }
}
else if (day == 6) {
    fp.innerHTML = ("--NO CLASSES--");
    ft.innerHTML = ("");
    sp.innerHTML = ("Next Classes: COA RoomNo:334");
    st.innerHTML = ("(MON)08:55 - 09:50");
}
else {
    fp.innerHTML = ("--NO CLASSES--");
    ft.innerHTML = ("");
    sp.innerHTML = ("Tommorow Classes: COA RoomNo:334");
    st.innerHTML = ("(MON)08:55 - 09:50");
}




