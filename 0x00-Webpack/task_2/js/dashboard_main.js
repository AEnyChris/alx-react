const $ = require('jquery');
const _ = require('lodash');
const logo = require('../assets/holberton-logo.jpg');
require('../css/main.css');


$(document).ready(function() {
    // Create content
    const content = `
    <p>ALX Dashboard</p>
    <p>Dashboard data for the students</p>
    <button>Click here to get started</button>
    <p id='count'></p>
    <p>Copyright - ALX</p>
    `
    // Create and add the logo to the body
    const img = document.createElement('img');
    img.src = logo;
    img.id = 'logo';
    $('body').prepend(img);

    // Add the content to the body
    $('body').append(content);

    // Add the click counter to the button
    let count = 0;
    const updateCount = () => {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }
    const debouncedUpdateCount = _.debounce(updateCount, 1000);
    $('button').on('click', debouncedUpdateCount);

});
