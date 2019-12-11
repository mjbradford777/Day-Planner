$(document).ready(function() {
    let locStor = [];
    let index;
    let storedData = [];

    const init = () => {
        storedData = JSON.parse(localStorage.getItem('localStor'));
        for (let i = 0; i < storedData.length; i++) {
            if (storedData[i] !== null) {
                let j = i.toString();
                $('#' + j)[0].value = storedData[i];
            }
        }
        locStor = storedData;
    }

    init();

    $('button').on('click', function() {
        if ($(this).parent().siblings('.textarea').children('textarea').val() === '') {
            console.log('fail');
            return;
        } else {
            index = parseInt($(this).parent().siblings('.textarea').children('textarea')[0].id);
            locStor[index] = $(this).parent().siblings('.textarea').children('textarea')[0].value;
            localStorage.setItem('localStor', JSON.stringify(locStor));
        }
    });
})