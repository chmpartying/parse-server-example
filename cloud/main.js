
Parse.Cloud.define('hello', function (req, res) {
  res.success('Hello');
});


Parse.Cloud.define('deleteAllSessions', function (req, res) {
    var query = new Parse.Query("Sessions");
    query.find({
        success: function(results) {
            results.destroyAll();
            res.success();
        },
        error: function(results) {
            res.error("Error in deleting all sessions");
        }
    });
});

Parse.Cloud.beforeSave('Events', function (req, res) {

    var badWords = ['merde', 'bite'];
    var check = true;
    var detectedWord = "";
    var title = req.object.get('title');

    for (var i=0; i < badWords.length; i++) {
        var word = badWords[i]
        if (title.indexOf(word) != -1) {
            check = false;
            detectedWord = word;
        }
    }

    if (check == false) {
        res.error("You cannot create an event with the title: " + detectedWord)
    } else {
        res.success();
    }
});
