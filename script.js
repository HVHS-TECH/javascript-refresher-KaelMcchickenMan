var Points = 0

function ScriptAlert() {
document.getElementById("WelcomeMessage").innerHTML = "you pressed buton"
}

function AddPoint() {
var Points = Points + 1
alert(Points)
document.getElementById("PointsCounter").innerHTML = Points
}
