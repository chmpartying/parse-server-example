
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.beforeSave('Events', function(req, res) {
    if (req.object.get("title") == "title") {
        res.error("You cannot create an event with the title: 'title' ")
    } else {
        res.success()
    }
});
