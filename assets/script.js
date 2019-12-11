$(document).ready(function() {
    let locStor = [];
    let index;
    let storedData = [];

    const init = () => {
        $('#day').append('<p id="dayText"></p>');
        $('#dayText').text(moment().format('dddd MMMM Do'));
        if (moment().format('a') === 'am') {
            $('#3').css('background-color', 'green');
            for (let i = 4; i < 9; i++) {
                $('#' + i).css('background-color', 'green');
            }
            for (let i = 0; i , 3; i++) {
                if (parseInt(moment().format('h')) - 8 > i) {
                    $('#' + i).css('background-color', 'lightgray');
                } else if (parseInt(moment().format('h')) - 8 === i) {
                    $('#' + i).css('background-color', 'red');
                } else if (parseInt(moment().format('h')) - 8 < i) {
                    $('#' + i).css('background-color', 'green');
                }
            }
        } else if (moment().format('a') === 'pm') {
            for (let i = 0; i < 3; i++) {
                $('#' + i).css('background-color', 'lightgray');
            }
            if (parseInt(moment().format('h') === 12)) {
                $('#3').css('background-color', 'red');
            } else {
                $('#3').css('background-color', 'lightgray');
                for (let i = 4; i < 9; i++) {
                    if (parseInt(moment().format('h')) + 3 > i) {
                        $('#' + i).css('background-color', 'lightgray');
                    } else if (parseInt(moment().format('h')) + 3 === i) {
                        $('#' + i).css('background-color', 'red');
                    } else if (parseInt(moment().format('h')) + 3 < i) {
                        $('#' + i).css('background-color', 'green');
                    }
                }
            }
        }
        storedData = JSON.parse(localStorage.getItem('localStor'));
        if (storedData !== null) {
            for (let i = 0; i < storedData.length; i++) {
                if (storedData[i] !== null) {
                    let j = i.toString();
                    $('#' + j)[0].value = storedData[i];
                }
            }
            locStor = storedData;
        }
    }

    const checkTime = () => {
        $('#dayText').text(moment().format('dddd MMMM Do'));
        if (moment().format('a') === 'am') {
            $('#3').css('background-color', 'green');
            for (let i = 4; i < 9; i++) {
                $('#' + i).css('background-color', 'green');
            }
            for (let i = 0; i , 3; i++) {
                if (parseInt(moment().format('h')) - 8 > i) {
                    $('#' + i).css('background-color', 'lightgray');
                } else if (parseInt(moment().format('h')) - 8 === i) {
                    $('#' + i).css('background-color', 'red');
                } else if (parseInt(moment().format('h')) - 8 < i) {
                    $('#' + i).css('background-color', 'green');
                }
            }
        } else if (moment().format('a') === 'pm') {
            for (let i = 0; i < 3; i++) {
                $('#' + i).css('background-color', 'lightgray');
            }
            if (parseInt(moment().format('h') === 12)) {
                $('#3').css('background-color', 'red');
            } else {
                $('#3').css('background-color', 'lightgray');
                for (let i = 4; i < 9; i++) {
                    if (parseInt(moment().format('h')) + 3 > i) {
                        $('#' + i).css('background-color', 'lightgray');
                    } else if (parseInt(moment().format('h')) + 3 === i) {
                        $('#' + i).css('background-color', 'red');
                    } else if (parseInt(moment().format('h')) + 3 < i) {
                        $('#' + i).css('background-color', 'green');
                    }
                }
            }
        }
    }

    init();

    setInterval(checkTime, 60000);

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