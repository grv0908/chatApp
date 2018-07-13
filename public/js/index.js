var socket = io();
socket.on('connect', function() {
    console.log("Connected to server");
});
socket.on('disconnect', function() {
    console.log('disconnected');
});

socket.on('newMessage', (message) => {
    console.log('newMessage ', message);
    var li = jQuery('<li></li');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    console.log("came");
   e.preventDefault();
   
   socket.emit('createMessage', {
       from: 'User',
       text: jQuery('[name=message').val()
   }, function () {
       
   });
});

