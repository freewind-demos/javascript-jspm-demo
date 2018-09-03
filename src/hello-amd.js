define([], function () {
    return function (elementId) {
        document.getElementById(elementId).innerText = 'Hello! (from hello-amd.js)'
    }
})
