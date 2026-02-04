var Points = 0
var PointsPerClick = 1

function ScriptAlert() {
document.getElementById("WelcomeMessage").innerHTML = "you pressed buton"
}

function AddPoint() {
Points = Points + PointsPerClick
document.getElementById("PointsCounter").innerHTML = Points
}

function UpgradePoint() {
PointsPerClick = PointsPerClick + 1
}