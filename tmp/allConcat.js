
var Entry = require('./../js/journal.js').entryModule


$(document).ready(function(){
  $('#journal-entry').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var content = $('#content').val();
    $('#entry-post').prepend('<h1> ' + title + ' </h1>' +
                              '<br>' +
                              '<p> ' + content + ' </p>');

    var simpleEntry = new Entry(title, content);
    var wordCount = simpleEntry.countWords(content);
    $('#output').text('Count: ' + wordCount);
  });
});
