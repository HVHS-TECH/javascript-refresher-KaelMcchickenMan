var Points = 0
var PointsPerClick = 1
var UpgradeCost = 10
var UpgradeCostPointsPerSecond = 25
var PointsPerSecond = 0
setInterval(() => { DisplayCost()}, 100);
setInterval(() => { PointsPerSecond()}, 1000);
setInterval(() => {document.getElementById("PointsCounter").innerHTML = Points}, 100);



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

function UpgradePointsPerSecond() {
    if (Points >= UpgradeCostPointsPerSecond) {
    Points = Points - UpgradeCostPointsPerSecond
    UpgradeCostPointsPerSecond = UpgradeCostPointsPerSecond * 2
    PointsPerSecond = PointsPerSecond + 1
    } else {
        alert("Cannot Afford")
    }
}

function DisplayCost() {
    document.getElementById("PointsPerClickCost").innerHTML = "Upgrade Cost: " + UpgradeCost
    document.getElementById("PointsPerSecondCost").innerHTML = "Upgrade Cost: " + UpgradeCostPointsPerSecond
}

function PointsPerSecond() {
    Points = Points + PointsPerSecond
    alert("points per seconds is being set off")
}