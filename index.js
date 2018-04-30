import { app, BrowserWindow, shell } from 'electron';
// Setup inter-process-communication
const {ipcMain} = require('electron');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}
const path = require('path');
const fs = require('fs');
const os = require('os');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let secondWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    show: false
  });

  mainWindow.loadURL(`file://${__dirname}/setup.html`);

  mainWindow.once('ready-to-show', ()=>{
    mainWindow.show()
    mainWindow.maximize()
  })

  mainWindow.on('closed', ()=>{
    mainWindow = null
  })

  secondWindow = new BrowserWindow({
    show: false,
    // parent: mainWindow
  });

  secondWindow.loadURL(`file://${__dirname}/render/final.html`);

  
};

ipcMain.on('update-second-page', (event, arg)=>{
  secondWindow.webContents.send('update-data', arg);
  mainWindow.hide();
  secondWindow.show();
  secondWindow.maximize();
});

ipcMain.on('final-form-rendered', (event, arg)=>{
  const pdfPath = path.join(os.tmpdir(), 'pdf-sample.pdf');
  const renderWindow = BrowserWindow.fromWebContents(event.sender);

  renderWindow.webContents.printToPDF({
    "marginsType": 1,
    "pageSize": "Legal",
    "landscape": true
  }, (err, data)=>{
    if(err) return console.log(err.message);

    fs.writeFile(pdfPath, data, function(err) {
      if(err) return console.log(err.message);
      shell.openExternal('file://'+ pdfPath);
      event.sender.send('pdf-written', pdfPath);
    })
  })
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
