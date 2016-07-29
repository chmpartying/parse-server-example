
Parse.Cloud.define('hello', function (req, res) {
  res.success('Hello');
});

Parse.Cloud.beforeSave('Events', function (req, res) {

    var badWords = ['merde', 'bite'];
    var check = true;
    var detectedWord = "";
    var title = req.object.get('title');

    for (var i=0; i < badWords.length; i++) {
        if (title.indexOf(badWords[i]) != -1)
            check = false;
            detectedWord = badWords[i];
    }

    if (check == false) {
        res.error("You cannot create an event with the title: " + detectedWord)
    } else {
        res.success();
    }
});
