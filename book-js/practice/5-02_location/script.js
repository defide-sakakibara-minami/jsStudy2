'use strict';

// 初期化処理

const html = document.querySelector('html').lang;

if(html === 'ja') {
    document.querySelector('option[value="index.html"]').selected = true;
} else if(html === 'en') {
    document.querySelector('option[value="index-en.html"]').selected = true;
} else if(html === 'zh') {
    document.querySelector('option[value="index-zh.html"]').selected = true;
}

// 

document.getElementById('form').select.onchange = function() {
    location.href = document.getElementById('form').select.value;
}