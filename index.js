import { app, BrowserWindow } from 'electron';
// Setup inter-process-communication
const {ipcMain} = require('electron');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const fs = require('fs');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let secondWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);

  mainWindow.once('ready-to-show', ()=>{
    mainWindow.show()
  })

  mainWindow.on('closed', ()=>{
    mainWindow = null
  })

  secondWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  });

  secondWindow.loadURL(`file://${__dirname}/render/final.html`);

  
};

ipcMain.on('update-second-page', (event, arg)=>{
  secondWindow.webContents.send('update-data', arg);
  mainWindow.hide();
  secondWindow.show();
  secondWindow.webContents.printToPDF(
    {
      "marginsType": 1,
      "pageSize": "Letter",
      "landscape": true
    }, (err, data)=>{
    if(err) throw err;
    fs.writeFile(__dirname+'/sample-h-style-98w.pdf', data, (err)=>{
      if(err){
        alert('PDF Unable to write', err);
      }
    })
  })
});

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
