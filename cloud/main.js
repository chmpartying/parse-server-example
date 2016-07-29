
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hello');
});

Parse.Cloud.beforeSave('Events', function(req, res) {

    var badWords = ['merde', 'bite'];
    var check = true;
    var detectedWord = "";
    var title = req.object.get('title');

    for (word in badWords) {
        if (title.indexOf(word) != -1) {
            check = false;
            detectedWord = word;
        }
    }

    if (check = false) {
        res.error("You cannot create an event with the title: " + detectedWord);
    } else {
        res.success();
    }
});
