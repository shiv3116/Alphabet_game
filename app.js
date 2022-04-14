const Alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
];

const questions = [
    ["An _pple a day,keeps the doctor away", "The missing alphabet in St_r", "The missing alphabet in _rmy"],
    ["The starting alphabet of the natural satellite of earth", "The missing alphabet in _an", "The missing alphabet in wo_an"],
    ["The Alphabet which comes at the sixth position from starting of alphabets", "The missing alphabet in _irst", "The alphabet missing in belie_"],
    ["The Alphabet which comes at the sixth position from ending of alphabets", "This missing alphabet in _gly", "The missing alphabet in adie_"],
    ["The Alphabet which comes at the 16th position from the Alphabet 'A'", "The missing alphabet in _uarry", "The missing alphabet in a_ua"],
    ["The Alphabet at the (16/2-1+3)th position from starting of alphabets", "The missing alphabet in _acket", "The missing alphabet in un_ustifiable"],
    ["The Alphabet positioned at 7th prime number from starting of Alphabets", "The missing alphabet in _uiescent", "The missing alphabet in e_uid"],
    ["The missing alphabet in _achelorette", "The missing alphabet in Wom_", "The missing alphabets in throm_oem_olism"],
    ["The missing alphabet in _auce", "The missing alphabet in _abbatical", "The missing alphabets in _acchari_ed"],
    ["The missing alphabet in _alliative", "The missing alphabet in _andemonium", "The missing alphabets in cry_tos_oridium"]
];

const answers = ["A", "M", "F", "U", "Q", "J", "Q", "B", "S", "P"];

const gridele = document.getElementsByClassName("abtn");

const s = "abtn";
var count = 0;
var flag = 0;
let score = 100;
let fscore = 0;

function grid() {
    document.getElementById("que").innerHTML = questions[count][Math.floor(Math.random() * 3)];
    var x = 1;
    while (x <= 30) {
        var idn = s + x;
        document.getElementById(idn).innerHTML =
            Alphabets[Math.floor(Math.random() * 26)];
        x += 1;
    }
    var tmp = Math.floor(Math.random() * 28);
    document.getElementById(s + tmp).innerHTML = answers[count];
}

function showalpha(id) {
    const ans = document.getElementById(id).innerText;
    if (ans == answers[count] && flag == 0) {
        document.getElementById(id).style.background = "green";
        document.getElementById(id).style.color = "white";
        document.getElementById("lvl").style.visibility = "visible";
        flag = 1;
        fscore += score;
    } else {
        if (flag == 0) {
            document.getElementById("que").innerHTML = questions[count][Math.floor(Math.random() * 3)];
            var val = document.getElementById("que").innerHTML;
            console.log(val);
            if (val == questions[2][0] || val == questions[3][0] || val == questions[5][0] || val == questions[6][0]) {
                document.getElementById("note").style.visibility = "visible";
            }
            else {
                document.getElementById("note").style.visibility = "hidden";
            }
            document.getElementById(id).style.background = "red";
            document.getElementById(id).style.color = "white";
            score -= (count + 1);
        }
    }
}

function nextques() {
    if (flag == 1) {
        document.getElementById("scr").style.visibility = "hidden";
        document.getElementById("lvl").style.visibility = "hidden";
        score = 100;
        flag = 0;
        count++;
        if (count < 10) {
            for (let i = 0; i < gridele.length; i++) {
                gridele[i].style.background = "#1a1918";
                gridele[i].style.color = "white";
            }
            console.log(count);
            document.getElementById("que").innerHTML = questions[count][Math.floor(Math.random() * 3)];
            var val = document.getElementById("que").innerHTML;
            // console.log(val);
            if (val == questions[2][0] || val == questions[3][0] || val == questions[5][0] || val == questions[6][0]) {
                document.getElementById("note").style.visibility = "visible";
            }
            else {
                document.getElementById("note").style.visibility = "hidden";
            }
            if (count == 9) {
                document.getElementById("next").innerText = "Finish";
            }
            const s = "abtn";
            var x = 1;
            while (x <= 30) {
                var idn = s + x;
                document.getElementById(idn).innerHTML =
                    Alphabets[Math.floor(Math.random() * 26)];
                x += 1;
            }
            var tmp = Math.floor(Math.random() * 28);
            // console.log(s+tmp);
            // console.log(answers[count]);
            document.getElementById(s + tmp).innerHTML = answers[count];
        }
        else {
            window.localStorage.setItem("score", fscore);
            window.location.assign("end.html");
        }
    }
    else {
        window.alert("you have not mastered the current level");
    }
}
