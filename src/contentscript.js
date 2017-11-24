'use strict';
import data from './PrData'

const elem = document.getElementsByClassName('merge-message')
const mergeMessageField = document.getElementById('merge_message_field')
const prComment = document.getElementsByClassName('markdown-body')[0]
const observer = new MutationObserver((recodes, observer) => {
    const texts = prComment.innerText.split('\n')
    data.get().then((val) => {
        const kensho = val.startKensho
        const kenshoEnd = val.endKensho

        var flag = false
        texts.forEach(_element => {
            if (_element == kenshoEnd) {
                flag = false
            }
    
            if (flag) {
                mergeMessageField.value += '\n' + _element
                console.log(_element)
            }
            
            if (_element == kensho) {
                flag = true
                mergeMessageField.value += '\n' + '**検証項目:**'
            }
        });

        if (mergeMessageField.value.split('\n').length <= 1) {
            mergeMessageField.value += '\n' + '**検証項目:**\nなし'      
        }
    })
})

observer.observe(elem[0], {
    childList: true,
    subtree: true,
    attributes: true,
})