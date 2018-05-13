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

const electronInstaller = require('electron-winstaller');
const path = require('path');
const ico = path.normalize(__dirname + '/src/assets/icons/precipart_64x64.ico');
console.log(ico);

var settings = {
    appDirectory: './out/CNC-Lathe-Setup-Sheet-win32-x64',
    outputDirectory: './installers',
    authors: 'patrickhauke.io',
    exe: './CNC-Lathe-Setup-Sheet.exe',
    description: "Prototype Tooling Sheet Application",
    iconUrl: ico,
    setupIcon: ico,
    title: 'CNC Lathe Setup Sheet',
    name: 'CNCLatheSetupSheet',
    setupExe: 'cnc-lathe-setup-sheet.exe',
    // setupMsi: 'cnc-lathe-setup-sheet.msi'
};

resultPromise = electronInstaller.createWindowsInstaller(settings);
 
resultPromise.then(() => {
    console.log("The installers of your application were succesfully created !");
}, (e) => {
    console.log(`Build Failed: ${e.message}`)
});