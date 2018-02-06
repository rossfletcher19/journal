function Entry(title, content) {
  this.title = title;
  this.content = content;
}

Entry.prototype.counter = function(content) {
  var output = entry.split(" ");
  console.log('reached countWords function');
  return output.length;
}

exports.entryModule = Entry;






// exports.someModule = someConstructer or method set to a property of exports object;
