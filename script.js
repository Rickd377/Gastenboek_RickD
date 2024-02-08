document.addEventListener('DOMContentLoaded', function() {
    var addMessageButton = document.querySelector('.add-message');
    var messageBlock = document.querySelector('.message-block');

    addMessageButton.addEventListener('click', function() {
        var isActive = messageBlock.style.left === '0px';
        messageBlock.style.left = isActive ? '-17.4rem' : '0px';
    });
});