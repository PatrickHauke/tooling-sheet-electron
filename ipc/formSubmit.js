import { forEach } from 'iterall';

const { ipcRenderer } = require('electron');

function chunkArr(arr, chunkSize){
    let results = [];
    while (arr.length){
        results.push(arr.splice(0, chunkSize));
    }
    return results;
}

document.getElementById('render').addEventListener('click', () => {
    // const inputs = document.querySelectorAll('.hook');
    const spindleData = $('input[data-index]').serializeArray();
    let formData = [];
    let spindleObj = {}, subspindleObj = {}, uniqueObj = {};
    let spindleArr = [], subspindleArr = [], uniqueArr = [];
    let spindleObjCt = ($('input[data-index]').length/8);

    
    let spindleMod = (el)=>{
        return el.name.startsWith('spindle');
    }

    let subSpindleMod = (el)=>{
        return el.name.startsWith('sub');
    }


    spindleArr = JSON.stringify(spindleData.filter(spindleMod));
    let itn = spindleData.filter(spindleMod);
    console.log('Without stringify: ' + itn);
    console.log('With stringify: ' + JSON.stringify(spindleArr));
    

    // console.log(spindleArr);
    
    subspindleArr = spindleData.filter(subSpindleMod)

    // console.log(spindleArr);
    let sample = chunkArr(itn, 8);
    let final;
    sample.forEach((data)=>{
        final.push(data);
    })
    // console.log(final);
    // console.log(JSON.stringify(spindleArr));
    
    let echo = [
        {"spindleSet": spindleArr}
    ]
    // console.log(JSON.stringify(echo, null, 4));

    
    // console.log(JSON.stringify($('input[data-index]').serializeArray()));
    
    // inputs.forEach(element => {
    //     if(element.name.includes('spindle_')){
    //     // console.log(element);
    //     spindleObj.append(element);
    //     } 
    //     else if (element.name.includes('sub_')){
    //     console.log('sub');
    //     } else {
    //         uniqueArr.push(element);
    //     }
    // });

    // console.log(spindleData);
    // spindleData.forEach((data)=>{
    //     // let objName = data.name.substring(0,8), objVal = data.value;
    //     // let objStructure = {
    //     //     objName: objVal
    //     // }
    //     console.log(data);
    // })

    // spindleArr = $.map(spindleData, (el)=>{
    //     let set = {
            
    //     }
    //     return {}
    // })
    // console.log(spindleArr);

    // console.log(spindleData.length + 'echo')
    // for(var i=0; i<spindleData.length; i++){
    //     let objName = spindleData[i].name.substring(0,14), objVal = spindleData[i].value;
        
    // }

    // console.log(spindleObj)
    
    // console.log(spindleObj);
    // inputs.forEach((el) => {
    //     formData.push(
    //         {
    //             "name": el.name,
    //             "data": el.value
    //         }
    //     )
    // });

    // ipcRenderer.send('update-second-page', formData);
    // Trigger event listener action in render process (second.html) from main process
    // ipcRenderer.send('update-second-page', Data);
}, false);