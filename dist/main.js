/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function component() {
    const element = document.getElementById('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')


    return element 
}

document.body.appendChild(component())
/******/ })()
;