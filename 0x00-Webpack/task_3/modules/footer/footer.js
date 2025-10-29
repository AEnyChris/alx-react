const $ = require('jquery')
require('./footer.css')


$(document).ready(function () {
    const footer = document.createElement('footer');

    const pfooter = document.createElement('p');
    pfooter.id = 'footer_text';
    $(pfooter).append(`&copy; 2025 Copyright - ALX`);

    $(footer).append(pfooter);
    $('body').append(footer)
})