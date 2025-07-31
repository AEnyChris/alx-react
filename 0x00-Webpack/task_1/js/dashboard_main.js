const $ = require('jquery');
const _ = require('lodash');

$(document).ready(function() {
    const content = `
    <p>ALX Dashboard</p>
    <p>Dashboard data for the students</p>
    <button>Click here to get started</button>
    <p id='count'></p>
    <p>Copyright - ALX</p>
    `
    $('body').append(content);


    let count = 0;
    const updateCount = () => {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }
    const debouncedUpdateCount = _.debounce(updateCount, 500);
    $('button').on('click', debouncedUpdateCount);

});