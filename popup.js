let amazonextension = angular.module("amazonextension", ["ui.router"]);

amazonextension.config([
    "$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider, $urlRouterProvider) {
        // first-testing
        // $stateProvider.state("home", {
        //     url: "/home",
        //     templateUrl: "/home.html",
        //     controller: "home",
        // });

        $stateProvider.state("login", {
            url: "/login",
            templateUrl: "/login.html",
            controller: "login",
        });

        $stateProvider.state("signup", {
            url: "/signup",
            templateUrl: "/signup.html",
            controller: "signup",
        });

        $urlRouterProvider.otherwise("login");
    },
]);

// first-testing
// amazonextension.controller("home", ["$scope", function($scope){
//     $scope.a=10;
// }]);

var ID, pswd, member;
var userdata = {
    ID,
    pswd,
    member
};

amazonextension.controller("login", [
    "$scope",
    function ($scope) {
        // Commented to enable placeholders
        // $scope.username = "";
        // $scope.pswd = "";

        $scope.press = function (username, pswd) {
            $scope.username = username;
            userdata.ID = username;
            userdata.pswd = pswd;
            userdata.member = 1;
            console.log(userdata);
            notifyBackgroundPage(userdata);
        };
    },
]);

amazonextension.controller("signup", [
    "$scope",
    function ($scope) {
        // Commented to enable placeholders
        // $scope.username = "";
        // $scope.pswd = "";

        $scope.press = function (username, pswd) {
            $scope.username = username;
            userdata.ID = username;
            userdata.pswd = pswd;
            userdata.member = 0;
            console.log(userdata);
            notifyBackgroundPage(userdata);
        };
    },
]);

function handleResponse(message) {
    console.log(`Message from the background script:  ${message.response}`);
}

function handleError(error) {
    console.log(`Error: ${error}`);
}

function notifyBackgroundPage(e) {
    var sending = chrome.runtime.sendMessage(userdata);
    sending.then(handleResponse, handleError);
}
