'use strict';

function pobierzDane() {
    var httpReq = new XMLHttpRequest;

    httpReq.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", true);

    httpReq.onreadystatechange = function () {
        if (httpReq.readyState == 4) {

            if (httpReq.status >= 200 && httpReq.status < 300 || httpReq.status == 304 || navigator.userAgent.indexOf("Safari") >= 0 && typeof httpReq.status == "undefined") {
                
                var returnData = JSON.parse(httpReq.responseText);
                
                console.log(returnData);
                
                var userId = document.createElement('p');
                userId.innerHTML = 'ID użytkownika to: ' + returnData.userId;
                document.body.appendChild(userId);
                
                var userName = document.createElement('p');
                userName.innerHTML = 'nazwa użytkownika to: ' + returnData.userName;
                document.body.appendChild(userName);
                
                var userURL = document.createElement('p');
                userURL.innerHTML = 'URL użytkownika to: ' + '<a href="https://www.'+returnData.userURL+'">' + returnData.userURL + '</a>';
                document.body.appendChild(userURL);
                
                httpReq = null;
            }
        }
    }

    httpReq.send();

}
