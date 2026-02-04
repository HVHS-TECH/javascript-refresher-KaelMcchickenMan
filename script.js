var Points = 0
var PointsPerClick = 1
var UpgradeCost = 10

setInterval(() => { DisplayCost()}, 1000);

function ScriptAlert() {
document.getElementById("WelcomeMessage").innerHTML = "you pressed buton"
}

function AddPoint() {
Points = Points + PointsPerClick
document.getElementById("PointsCounter").innerHTML = Points
}

function UpgradePoint() {
    if (Points >= UpgradeCost) {
    Points = Points - UpgradeCost
    UpgradeCost = UpgradeCost * 2
    PointsPerClick = PointsPerClick + 1
    } else {
        alert("Cannot Afford")
    }
}

function DisplayCost() {
    document.getElementById("PointsPerClickCost").innerHTML = UpgradeCost
}