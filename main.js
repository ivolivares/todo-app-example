'use strict';
var todoApp = function() {
  var UI = {
    input : document.querySelector("input[name='todo']"),
    button : document.querySelector("button[name='save']"),
    list : document.querySelector("#todo-list")
  };
  var tasks = 0;
  var template = '<li id="item-[id-task]">[text]\
        <button data-id="[id-task]">X</button>\
        <input type="checkbox" value="[id-task]" data-done="[id-task]">\
        </li>';
  var deleteItem = function(event) {
    var item = document.querySelector('#item-' + event.target.getAttribute('data-id'));
    item.parentElement.removeChild(item);
    tasks--;
  };
  var doneItem = function(event) {
    var item = document.querySelector('#item-' + event.target.value);
    item.className = 'done';
    document.querySelector('input[data-done="' + event.target.value + '"]').disabled = true;
  };
  UI.button.addEventListener('click', function(event) {
    event.preventDefault();
    tasks++;
    var item = template.replace('[text]', UI.input.value).replace(/\[id\-task\]/g, tasks);
    UI.list.insertAdjacentHTML('beforeEnd', item);
    UI.input.value = '';
    document.querySelector('button[data-id="' + tasks + '"]').addEventListener('click', deleteItem);
    document.querySelector('input[data-done="' + tasks + '"]').addEventListener('click', doneItem);
  });
};

window.onload = todoApp;