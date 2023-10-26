import { AnyHotKey } from 'anyhotkey';

document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.querySelector('input');
    AnyHotKey(inputElement, {
        key: 13,
        subKey: 17,
        onKey: function() {
            document.querySelector('#inputOnKey').textContent = 'input onKey';
        },
        onHotkey: function() {
            document.querySelector('#inputOnKey').textContent = 'input onHotkey';
        }
    });

    AnyHotKey(document, {
        interval: 300,
        key: 49,
        subKey: 90,
        onKey: function() {
            document.querySelector('#documentOnKey').textContent = 'document onKey';
        },
        onHotkey: function() {
            document.querySelector('#documentOnKey').textContent = 'document onHotkey';
        }
    });


    //for example
    document.addEventListener("keydown", function(event) {
        const keyCodeElement = document.querySelector('#keyCode');
        keyCodeElement.textContent = String(event.keyCode);
    });
});