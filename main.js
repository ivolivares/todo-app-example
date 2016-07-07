'use strict';
var todoApp = function() {
  var UI = {
    input : document.querySelector("input[name='todo']"),
    button : document.querySelector("button[name='save']"),
    list : document.querySelector("#todo-list")
  };
  var tasks = [];
  var template = '<li id="item-[id-task]">[text]\
        <button data-id="[id-task]">X</button>\
        <input type="checkbox" value="[id-task]" data-done="[id-task]">\
        </li>';
  var deleteItem = function(event) {
    var item = document.querySelector('#item-' + event.target.getAttribute('data-id'));
    item.parentElement.removeChild(item);
  };
  var doneItem = function(event) {
    var item = document.querySelector('#item-' + event.target.value);
    item.className = 'done';
  };
  UI.button.addEventListener('click', function(event) {
    event.preventDefault();
    tasks.push(UI.input.value);
    var item = template.replace('[text]', UI.input.value).replace(/\[id\-task\]/g, tasks.length);
    UI.list.insertAdjacentHTML('beforeEnd', item);
    UI.input.value = '';
    document.querySelector('button[data-id="' + tasks.length + '"]').addEventListener('click', deleteItem);
    document.querySelector('input[data-done="' + tasks.length + '"]').addEventListener('click', doneItem);
  });
};

window.onload = todoApp;