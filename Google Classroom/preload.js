document.addEventListener("DOMContentLoaded", function() {
    console.log("oh")

    const customTitlebar = require('custom-electron-titlebar');

    new customTitlebar.Titlebar({
        backgroundColor: customTitlebar.Color.fromHex(require("./package.json").color)
    });
    document.onfullscreenchange = function() {
        document.getElementsByClassName("container-after-titlebar")[0].style.top = document.getElementsByClassName("container-after-titlebar")[0].style.top == "22px" ? "0px" : "22px"
        document.getElementsByClassName("titlebar")[0].style.height = document.getElementsByClassName("titlebar")[0].style.height == "22px" ? "0px" : "22px"
    }
    document.querySelectorAll("nav").forEach(x => {
        x.style.position = "initial"
    })
    document.getElementById("masthead-container").style.position = "absolute"
})