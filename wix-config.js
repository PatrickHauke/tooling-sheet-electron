// const MSICreator = require('electron-wix-msi').MSICreator;
// const path = require('path');

// const msiCreator = new MSICreator({
//     appDirectory: path.resolve(__dirname+ '/src/out'),
//     description: "Lathe Setup Sheet Generator",
//     exe: 'cnc-tooling-sheet-v0.1',
//     name: 'CNC Lathe Setup Sheet Form v0.1',
//     manufacturer: 'patrickhauke.io/',
//     version: '0.1',
//     outputDirectory: path.resolve(__dirname+ '/')
// });

// await msiCreator.create();

// await msiCreator.compile();

var electronInstaller = require('electron-winstaller');

var settings = {
    appDirectory: './out/tooling-sheet-electron-win32-x64',
    outputDirectory: './installers',
    authors: 'patrickhauke.io',
    exe: './tooling-sheet-electron.exe',
    iconUrl: __dirname + '/src/assets/icons/precipart_64x64.ico',
    setupIcon: __dirname + '/src/assets/icons/precipart_64x64.ico',
    name: 'CNCLatheSetupSheet',
    setupExe: 'cnc-lathe-setup-sheet',
    setupMsi: 'cnc-lathe-setup-sheet'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Build Failed: ${e.message}`)
});