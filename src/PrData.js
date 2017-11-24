'use strict';

class PrData {
    get() {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(['startKensho', 'endKensho'], (value) => {
                resolve(value)
            })
        })
    }

    set(startKensho, endKensho) {
        let json = {
            'startKensho': startKensho,
            'endKensho': endKensho
        }
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set(json, () => {
                resolve()
            })
        })
    }
}

export default new PrData()