var slider = document.getElementById("myRange");
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }

document.getElementById('submit-day').value = document.getElementById("today").innerHTML;

for (day in moods) {
    if (moods[day] > 50) {
        document.getElementsByClassName(day)[0].style.backgroundColor = "green";
    } else if (moods[day] < 50) {
        document.getElementsByClassName(day)[0].style.backgroundColor = "red";
    } else {
        document.getElementsByClassName(day)[0].style.backgroundColor = "gray";
    }
}