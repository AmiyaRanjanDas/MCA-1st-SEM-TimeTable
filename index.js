//-------------local host name----------------

let nowName,nowGroup;
console.log(localStorage.getItem("UserNameUp1"));
if (localStorage.getItem("UserNameUp1") === null) {
    AddName();
}
else {
    nowName = localStorage.getItem("UserNameUp1");
    nowGroup = localStorage.getItem("Group");
    document.getElementById("UserName").innerHTML = nowName;
}

function AddName() {
    var UserName1 = prompt("Enter your Name");
    var Group1 = prompt("Enter Your Group A1 or A2:");
    if (UserName1.length < 3 || Group1 != "A1" && Group1 != "A2") {
        // console.log("Invalid Input !!");
        var just = confirm("Invalid Credentials");
        if (just) {
            EditName();
        }
    }
    else {
        localStorage.setItem("UserNameUp1", UserName1);
        localStorage.setItem("Group", Group1);
    }
    nowName = localStorage.getItem("UserNameUp1");
    nowGroup = localStorage.getItem("Group");
    document.getElementById("UserName").innerHTML = nowName;
}


function EditName() {
    var UserName2 = prompt("Enter your Name", nowName);
    var Group2 = prompt("Enter Your Group A1 or A2:", nowGroup);

    if (UserName2.length < 3 || Group2 != "A1" && Group2 != "A2") {
        // console.log("Invalid Input !!");
        var just = confirm("Invalid Credentials");
        if (just) {
            EditName();
        }
    }
    else {
        localStorage.setItem("UserNameUp1", UserName2);
        localStorage.setItem("Group", Group2);
    }
    nowName = localStorage.getItem("UserNameUp1");
    nowGroup = localStorage.getItem("Group");
    document.getElementById("UserName").innerHTML = nowName;

}

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
let countdown;

function updateTimeTable(){
if (day == 1) {
    if (time < 15.20 && time > 13.30) {
        fp.innerHTML = ("CLAB RoomNo:466");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("Tommorow:-Classes: COA RoomNo:112");
        st.innerHTML = ("(TUES)09:50 - 10:45");
        countdown="";
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("OS || RoomNo:334");
        ft.innerHTML = ("12:35 - 01.30");
        if (nowGroup == "A1") {
            sp.innerHTML = ("CLAB RoomNo:466(A1)||CLAB RoomNo:465(A2)");
            st.innerHTML = ("01:30 - 03:20");
            countdown=12.35;
        }
        else {
            sp.innerHTML = ("Tommorow:-Classes: COA RoomNo:112");
            st.innerHTML = ("(TUES)09:50 - 10:45");
            countdown="";
        }
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("MACA || RoomNo:334");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("OS || RoomNo:334");
        st.innerHTML = ("12:35 - 01.30");
        countdown=11.40;
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("MACA || RoomNo:334");
        st.innerHTML = ("11:40 - 12.35");
        countdown=10.45;
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("ENGLISH || RoomNo:334");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("LUNCH -> MACA || RoomNo:334");
        st.innerHTML = ("11:40 - 12.35");
        countdown=19.50;
    }
    else if (time < 9.50 && time > 8.55) {
        fp.innerHTML = ("COA || RoomNo:334");
        ft.innerHTML = ("08:55 - 09.50");
        sp.innerHTML = ("ENGLISH || RoomNo:334");
        st.innerHTML = ("09:50 - 10:45");
        countdown=8.55;
    }
    else if (time < 8.55) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("COA || RoomNo:334");
        st.innerHTML = ("(MON)08:55 - 09:50");
        countdown=8.55;
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Tommorow Classes: \n COA RoomNo:112");
        st.innerHTML = ("(TUES)09:50 - 10:45");
        countdown="";
    }
}
else if (day == 2) {
    if (time < 15.20 && time > 14.25) {
        fp.innerHTML = ("OS || RoomNo:334");
        ft.innerHTML = ("02:25 - 03:20");
        sp.innerHTML = ("Tommorow Classes: COA RoomNo:112");
        st.innerHTML = ("(WED)08:55 - 09:50");
        countdown="";
    }
    else if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("NETWORK || RoomNo:334");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("OS || RoomNo:334");
        st.innerHTML = ("02:25 - 03:20");
        countdown=13.30;
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("12:35 - 01.30");
        sp.innerHTML = ("NETWORK || RoomNo:334");
        st.innerHTML = ("01:30 - 02:25");
        countdown=12.35;
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("C Programming || RoomNo:112");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("LUNCH -> NETWORK || RoomNo:334");
        st.innerHTML = ("01.30 - 02:25");
        countdown=11.40;
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("ENGLISH || RoomNo:112");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("C Programming || RoomNo:112");
        st.innerHTML = ("11:40 - 12.35");
        countdown=10.45;
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("COA || RoomNo:112");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("ENGLISH || RoomNo:112");
        st.innerHTML = ("10:45 - 11.40");
        countdown=9.50;
    }
    else if (time < 9.50) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("COA || RoomNo:112");
        st.innerHTML = ("(TUES))09:50 - 10:45");
        countdown=9.50;
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Tommorow Classes: COA RoomNo:112");
        st.innerHTML = ("(WED)08:55 - 09:50");
        countdown="";
    }
}
else if (day == 3) {
    if (time < 14.25 && time > 13.30) {
        if (nowGroup == "A1") {
            fp.innerHTML = ("--NO CLASSES--");
            ft.innerHTML = ("");
            sp.innerHTML = ("Tomorrow:CLAB RoomNo:466");
            st.innerHTML = ("8.00 - 9.50");
        }
        else {
            fp.innerHTML = ("CLAB RoomNo:465");
            ft.innerHTML = ("1:30 - 03.20");
            sp.innerHTML = ("--NO CLASSES--");
            st.innerHTML = ("");
            countdown=9.50;
        }
        countdown="";
    }
    else if (time < 13.30 && time > 11.40) {
        if (nowGroup == "A1") {
            fp.innerHTML = ("OS-LAB RoomNo:466");
            ft.innerHTML = ("11:40 - 01.30");
            sp.innerHTML = ("--NO CLASSES--");
            st.innerHTML = ("");
        }
        else {
            fp.innerHTML = ("LCS-LAB RoomNo:309");
            ft.innerHTML = ("11:40 - 01.30");
            sp.innerHTML = ("CLAB RoomNo:465");
            st.innerHTML = ("01:30 - 03.20");
        }
        countdown=11.40;
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("10:45 - 11.40");
        if (nowGroup == "A1") {
            sp.innerHTML = ("LUNCH -> OS-LAB RoomNo:466");
            st.innerHTML = ("11:40 - 12.35");
        }
        else {
            sp.innerHTML = ("LCS-LAB RoomNo:309(A)");
            st.innerHTML = ("11:40 - 12.35");
        }
        countdown=10.45;
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("MACA || RoomNo:112");
        ft.innerHTML = ("09:50 - 10:45");
        if (nowGroup == "A1") {
            sp.innerHTML = ("LUNCH -> OS-LAB RoomNo:466");
            st.innerHTML = ("11:40 - 12.35");
        }
        else {
            sp.innerHTML = ("LCS-LAB RoomNo:309(A)");
            st.innerHTML = ("11:40 - 12.35");
        }
        countdown=9.50;
    }
    else if (time < 9.50 && time > 8.55) {
        fp.innerHTML = ("COA || RoomNo:112");
        ft.innerHTML = ("08:55 - 09.50");
        sp.innerHTML = ("MACA || RoomNo:112");
        st.innerHTML = ("09:50 - 10:45");
        countdown=8.55;
    }
    else if (time < 8.55) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("COA || RoomNo:112");
        st.innerHTML = ("(WED)08:55 - 09:50");
        countdown=8.55;
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        if (nowGroup == "A1") {
            sp.innerHTML = ("Tommorow Classes: CLAB RoomNo:466");
            st.innerHTML = ("(THU)08:00 - 08:55");
        }
        else {
            sp.innerHTML = ("Tommorow Classes: CLAB RoomNo:465");
            st.innerHTML = ("(THU)08:00 - 08:55");
        }
        countdown="";
    }
}
else if (day == 4) {
    if (time < 15.20 && time > 14.25) {
        fp.innerHTML = ("C Programming || RoomNo:332");
        ft.innerHTML = ("2:25 - 3:20");
        sp.innerHTML = ("--NO CLASSES--");
        st.innerHTML = ("");
        countdown="";
    }
    else if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("ENGLISH || RoomNo:112");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("C Programming || RoomNo:332");
        st.innerHTML = ("2:25 - 3:20");
        countdown=13.30;
    }
    else if (time < 13.30 && time > 12.35) {
        fp.innerHTML = ("NETWORK || RoomNo:112");
        ft.innerHTML = ("12:35 - 01.30");
        sp.innerHTML = ("ENGLISH || RoomNo:112");
        st.innerHTML = ("01:30 - 02:25");
        countdown=12.35;
    }
    else if (time < 12.35 && time > 11.40) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("11:40 - 12.35");
        sp.innerHTML = ("NETWORK || RoomNo:112");
        st.innerHTML = ("12:35 - 01.30");
        countdown=11.40;
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("MACA || RoomNo:334");
        ft.innerHTML = ("10:45 - 11.40");
        sp.innerHTML = ("LUNCH -> NETWORK || RoomNo:112");
        st.innerHTML = ("12:35 - 01.30");
        countdown=10.45;
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("OS || RoomNo:334");
        ft.innerHTML = ("09:50 - 10:45");
        sp.innerHTML = ("MACA || RoomNo:334");
        st.innerHTML = ("10:45 - 11.40");
        countdown=9.50;
    }
    else if (time < 9.50 && time > 8.00) {
        if (nowGroup == "A1") {
            fp.innerHTML = ("CLAB RoomNo:466");
            ft.innerHTML = ("08:00 - 09.50");
        }
        else {
            fp.innerHTML = ("CLAB RoomNo:465");
            ft.innerHTML = ("08:00 - 09.50");
        }
        sp.innerHTML = ("OS || RoomNo:334");
        st.innerHTML = ("09:50 - 10:45");
        countdown=8.00;
    }
    else if (time < 8.00) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        if (nowGroup == "A1") {
            sp.innerHTML = ("CLAB RoomNo:466");
            st.innerHTML = ("(THU)08:00 - 09:50");
        } else {
            sp.innerHTML = ("CLAB RoomNo:465");
            st.innerHTML = ("(THU)08:00 - 09:50");
        }
        countdown=8.00;
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Tommorow Classes: MACA RoomNo:112");
        st.innerHTML = ("(FRI)09:50 - 10:45");
        countdown="";
    }
}
else if (day == 5) {
    if (time < 15.20 && time > 14.25) {
        fp.innerHTML = ("NETWORK || RoomNo:334");
        ft.innerHTML = ("02:25 - 03:20");
        sp.innerHTML = ("--NO CLASSES--");
        st.innerHTML = ("");
        countdown="";
    }
    else if (time < 14.25 && time > 13.30) {
        fp.innerHTML = ("C Programming || RoomNo:334");
        ft.innerHTML = ("01:30 - 02:25");
        sp.innerHTML = ("NETWORK || RoomNo:334");
        st.innerHTML = ("02:25 - 03:20");
        countdown=13.30;
    }
    else if (time < 13.30 && time > 11.40) {
        if (nowGroup == "A1") {
            fp.innerHTML = ("LCS-LAB RoomNo:309(A)");
            ft.innerHTML = ("11:40 - 01.30");
        } else {
            fp.innerHTML = ("OS-LAB RoomNo:466");
            ft.innerHTML = ("11:40 - 01.30");
        }
        sp.innerHTML = ("C Programming || RoomNo:334");
        st.innerHTML = ("01:30 - 02:25");
        countdown=11.40;
    }
    else if (time < 11.40 && time > 10.45) {
        fp.innerHTML = ("--LUNCH BREAK--");
        ft.innerHTML = ("10:45 - 11.40");
        if (nowGroup == "A1") {
            sp.innerHTML = ("LUNCH -> LCS-LAB RoomNo:309(A)");
            st.innerHTML = ("11:40 - 01.30");
        } else {
            sp.innerHTML = ("LUNCH -> OS-LAB RoomNo:466");
            st.innerHTML = ("11:40 - 01.30");
        }
        countdown=10.45;
    }
    else if (time < 10.45 && time > 9.50) {
        fp.innerHTML = ("MACA || RoomNo:112");
        ft.innerHTML = ("09:50 - 10:45");
        if (nowGroup == "A1") {
            sp.innerHTML = ("LUNCH -> LCS-LAB RoomNo:309(A)");
            st.innerHTML = ("11:40 - 01.30");
        } else {
            sp.innerHTML = ("OS-LAB RoomNo:466");
            st.innerHTML = ("11:40 - 01.30");
        }
        countdown=9.50;
    }
    else if (time < 9.50) {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("MACA || RoomNo:112");
        st.innerHTML = ("(FRI)09:50 - 10:45");
        countdown=9.50;
    }
    else {
        fp.innerHTML = ("--NO CLASSES--");
        ft.innerHTML = ("");
        sp.innerHTML = ("Next Classes: COA RoomNo:334");
        st.innerHTML = ("(MON)08:55 - 09:50");
        countdown="";
    }
}
else if (day == 6) {
    fp.innerHTML = ("SaturDay\n--NO CLASSES--");
    ft.innerHTML = ("");
    sp.innerHTML = ("Next Classes: COA RoomNo:334");
    st.innerHTML = ("(MON)08:55 - 09:50");
    countdown="";
}
else {
    fp.innerHTML = ("SunDay\n--NO CLASSES--");
    ft.innerHTML = ("");
    sp.innerHTML = ("Tommorow Classes: COA RoomNo:334");
    st.innerHTML = ("(MON)08:55 - 09:50");
    countdown="";
}
}
updateTimeTable();
setInterval(updateTimeTable,300000);
