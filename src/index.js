if (require('electron-squirrel-startup')) process.exit(0); // eslint-disable-line global-requirreturn;

import { app, BrowserWindow, shell } from 'electron';
const path = require('path');
const fs = require('fs');
const os = require('os');

// Setup inter-process-communication
const {ipcMain} = require('electron');
// Handle creating/removing shortcuts on Windows when installing/uninstalling.


if(handleSquirrelEvent()) {
  process.exit(0);
}

function handleSquirrelEvent(){
  //
  if(process.argv.length === 1){
    return false;
  }

  const ChildProcess = require('child_process');

  const appFolder = path.resolve(process.execPath, '..');
  const rootAtomFolder = path.resolve(appFolder, '..');
  const updateDotExe = path.resolve(path.join(rootAtomFolder, 'Update.exe'));
  const exeName = path.basename(process.execPath);

  const spawn = function(command, args) {
    let spawnedProcess, error;

    try {
      spawnedProcess = ChildProcess.spawn(command, args, {detached: true});
    } catch (error) {}

    return spawnedProcess;
  };

  const spawnUpdate = function(args) {
    return spawn(updateDotExe, args);
  };

  const squirrelEvent = process.argv[1];
  switch (squirrelEvent) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Install desktop and start menu shortcuts
      spawnUpdate(['--createShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Remove desktop and start menu shortcuts
      spawnUpdate(['--removeShortcut', exeName]);

      setTimeout(app.quit, 1000);
      return true;

    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated

      app.quit();
      return true;
  }
}


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let secondWindow;

const createWindow = () => {
  // Create the browser window.
  console.log(__dirname);
  mainWindow = new BrowserWindow({
    show: false,
    icon: path.join(__dirname, '/assets/icons/precipart.jpg')
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
    icon: path.join(__dirname, '/assets/icons/precipart.jpg')
    // parent: mainWindow
  });

  secondWindow.loadURL(`file://${__dirname}/render/final.html`);

  secondWindow.on('closed', ()=>{
    secondWindow = null
  })
  
};

ipcMain.on('update-second-page', (event, arg)=>{
  secondWindow.webContents.send('update-data', arg);
  // Uncomment for debug view of rendered pdf
  secondWindow.webContents.reloadIgnoringCache();
  // mainWindow.hide();
  // secondWindow.show();
  // secondWindow.maximize();
});

ipcMain.on('final-form-rendered', (event, arg)=>{
  // console.log(JSON.stringify(event.sender));
  const pdfPath = path.join(os.tmpdir(), `${arg}.pdf`);
  const renderWindow = BrowserWindow.fromWebContents(event.sender);



  renderWindow.webContents.printToPDF({
    "marginsType": 1,
    "pageSize": "Legal",
    "landscape": true
  }, (err, data)=>{
    if(err) return console.log(err.message);
    console.log(data);
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
