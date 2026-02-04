var Points = 0
var PointsPerClick = 1
var UpgradeCost = 10

setInterval(() => { DisplayCost()}, 100);
setInterval(() => {document.getElementById("PointsCounter").innerHTML = Points}, 100);

function ScriptAlert() {
document.getElementById("WelcomeMessage").innerHTML = "you pressed buton"
}

function AddPoint() {
Points = Points + PointsPerClick
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
    document.getElementById("PointsPerClickCost").innerHTML = "Upgrade Cost: " + UpgradeCost
}