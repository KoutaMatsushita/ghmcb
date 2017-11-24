'use strict';
import data from './PrData'

(() => {
    let start = document.getElementById('startKensho')
    let end = document.getElementById('endKensho')
    
    data.get().then((value) => {
        start.value = value.startKensho
        end.value = value.endKensho
    })

    document.getElementById('save').onclick = () => {
        data.set(start.value, end.value).then(() => {
            alert('保存しました')
        })
    }
})()