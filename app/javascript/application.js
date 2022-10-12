// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

$(document).ready(function(){
    $('#messages').scrollTop($('#messages')[0].scrollHeight);
});
