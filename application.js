function showFront() {
dizmo.showFront();
}

function showBack() {
    dizmo.showBack();
}

dizmo.onShowBack(function() {
    // You can add your own code here that will be executed when the back side is shown.
});

dizmo.onShowFront(function() {
    // You can add your own code here that will be executed when the front side is shown.
});

document.addEventListener('dizmoready', function() {
    console.log("ready");
    var socket = io('http://localhost:3000');
});
