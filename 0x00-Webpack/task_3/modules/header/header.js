const $ = require('jquery');
const logo = require('../assets/holberton-logo.jpg');
require('./header.css');


console.log('Init header');

$(document).ready(function() {
    // Create and add the logo to the header
    const header = document.createElement('header')
    const img = document.createElement('img');
    img.src = logo;
    img.id = 'logo';
    $(header).prepend(img);

    // Create and add the title to the header
    const title = document.createElement('h1');
    title.textContent = 'ALX Dashboard';
    $(header).append(title);
    $('body').prepend(header)
});
