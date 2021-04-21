function calDOB() {
    let bDate = document.getElementById("date").value;
    let now = new Date();
    let birthDate = new Date(bDate);
    let age = now.getFullYear() - birthDate.getFullYear();
    let month = now.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your are " + age + " years old";
}

function calculate() {

    var number = document.getElementById("number").value;

    if (number == "" || number == 0) {

        window.alert("Please type your correct age!");
        return;
    }

    var currentDate = new Date().getFullYear();


    var birthyear = currentDate - number;

    document.getElementById("year").style.display = "block";
    document.getElementById("year").innerHTML = "Your birth year is " + birthyear;

}
document.getElementById("year").style.display = "none";
// document.getElementById("dob").style.display = "none";

document.getElementById("button").onclick = function () {
    calculate();
};
document.getElementById("dob").onclick = function () {
    calDOB();
};