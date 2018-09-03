import $ from 'jquery'

export function hello(elementId) {
    const $element = $('#' + elementId)
    $element.text('Hello! (from hello-es6.js)')
}
