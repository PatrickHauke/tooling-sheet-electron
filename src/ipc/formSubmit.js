const { ipcRenderer } = require('electron');
document.getElementById('render').addEventListener('click', () => {
    const spindleData = $('.hook');
    let dataSet = [];
    for(var i = 0; i<spindleData.length; i++){
        if(spindleData[i].value.length === 0) spindleData[i].value = ' ';
        if(spindleData[i].name.startsWith('main')){
            dataSet.push({
                'name': spindleData[i].name,
                'value': spindleData[i].value,
                'render': 1
            });
        } 
        else if(spindleData[i].name.startsWith('sub')){
            dataSet.push({
                'name': spindleData[i].name,
                'value': spindleData[i].value,
                'render': 2
            });
        }
        
        // default for all other questions
        else 
            dataSet.push({
            'name': spindleData[i].name,
            'value': spindleData[i].value,
            'render': 0
        })
        
    }

    console.log('echo');

    // console.log(dataSet);
    // spindleData[0].foreach((data)=>{
    //     console.log(data);
    // })

    ipcRenderer.send('update-second-page', dataSet);
    // Trigger event listener action in render process (second.html) from main process
    // ipcRenderer.send('update-second-page', Data);
}, false);