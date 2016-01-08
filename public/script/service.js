/**
 * Created by ghayyas on 1/6/16.
 */


//here we define our service

app.service('firebaseLogin', function () {
        var ref = new Firebase("https://todosmaterial1.firebaseio.com//messages");
    return ref;
});