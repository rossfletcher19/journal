var vowelsAndConsonants = require('./../js/journal.js').vowelsAndConsonantsModule


$(document).ready(function(){
  $('#journal-entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    $('#journal-entry').hide();
    $('#entry-post').prepend('<h1> ' + entryTitle + ' </h1>' +
                              '<br>' +
                              '<p> ' + entryContent + ' </p>');
  });
});
