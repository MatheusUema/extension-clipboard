chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color: '#0ef500'}, () => {
        console.log('the color is fluke.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, ()=> {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })
            ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});