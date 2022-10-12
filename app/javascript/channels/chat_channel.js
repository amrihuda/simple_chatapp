import consumer from "channels/consumer"

consumer.subscriptions.create("ChatChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
    console.log('connected')
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    $('#form_message').trigger("reset");
    $('#messages').append('<p class="dummy_message"> ' + data.message + '</p>');
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
  }
});
