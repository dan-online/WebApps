const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require("./package.json").url
let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1100,
    height: 800,
    frame: false,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  mainWindow.loadURL(url)

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})
