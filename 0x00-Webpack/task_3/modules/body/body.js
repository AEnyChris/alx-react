const $ = require('jquery')
const _ = require('lodash')
require('./body.css')


$(document).ready(function (){
     const content = `
    <div class='container'>
        <div class='body-content'>
            <p>Dashboard data for the students</p>
            <button>Click here to get started</button>
            <p id='count'></p>
        </div>
    </div>
    `;

    $('body').append(content);

    let count = 0;
    const updateCount = () => {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }
    const debouncedUpdateCount = _.debounce(updateCount, 1000);
    $('button').on('click', debouncedUpdateCount);
});
