const { ipcRenderer } = require('electron');
document.getElementById('render').addEventListener('click', () => {
    const spindleData = $('.hook');
    let dataSet = [];
    for(var i = 0; i<spindleData.length; i++){
        dataSet.push({
            'name': spindleData[i].name,
            'value': spindleData[i].value
        });
    }

    // console.log(dataSet);
    // spindleData[0].foreach((data)=>{
    //     console.log(data);
    // })

    ipcRenderer.send('update-second-page', dataSet);
    // Trigger event listener action in render process (second.html) from main process
    // ipcRenderer.send('update-second-page', Data);
}, false);