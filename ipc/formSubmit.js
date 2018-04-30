// const { ipcRenderer } = require('electron');
// document.getElementById('render').addEventListener('click', () => {
//     const inputs = document.querySelectorAll('.hook');
//     let formData = [];
//     inputs.forEach((el) => {
//         formData.push(
//             {
//                 "name": el.name,
//                 "data": el.value
//             }
//         )
//     });

//     ipcRenderer.send('update-second-page', formData);
//     // Trigger event listener action in render process (second.html) from main process
//     // ipcRenderer.send('update-second-page', Data);
// }, false);