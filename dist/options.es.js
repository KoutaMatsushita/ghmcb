class PrData {
    get() {
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get(['startKensho', 'endKensho'], (value) => {
                resolve(value);
            });
        })
    }

    set(startKensho, endKensho) {
        let json = {
            'startKensho': startKensho,
            'endKensho': endKensho
        };
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set(json, () => {
                resolve();
            });
        })
    }
}

var data = new PrData();

(() => {
    let start = document.getElementById('startKensho');
    let end = document.getElementById('endKensho');
    
    data.get().then((value) => {
        start.value = value.startKensho;
        end.value = value.endKensho;
    });

    document.getElementById('save').onclick = () => {
        data.set(start.value, end.value).then(() => {
            alert('保存しました');
        });
    };
})();
