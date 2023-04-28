var click = document.getElementById("heart")
var count1 = document.getElementById("count")
var count = 0
click.addEventListener("click", function () {
    count++
    count1.textContent = count
})
function saved() {
    alert("This post Has Been Saved")
}
function change() {
    document.getElementById("sideBar").style.display = "block";
    document.getElementById("changer").style.display = "block";
}
function hide() {
    document.getElementById("sideBar").style.display = "none";
    document.getElementById("changer").style.display = "none";
}