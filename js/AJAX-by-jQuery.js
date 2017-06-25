'use strict';

/*$(function () {
    console.log('jQuery dziala');

    $.ajax({
        url: 'http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
        dataType: 'json',

        success: function (resultJSON) {
            console.log(resultJSON);
        },

        error: function (msg) {
            console.log(msg);
        }

    });
});*/


    /* wersja skrócona powyższego zapisu która przyjmuje dwa parametry: url oraz callback */

    $('#get-data').click(function () {

        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl',
            function (data) {
                $('body').append('<p>ID użytkownika to: ' + data.userId + '</p>');
                $('body').append('<p>nazwa użytkownika to: ' + data.userName + '</p>');
                $('body').append('<p>URL użytkownika to: ' + data.userURL + '</p>');

            });
    });

