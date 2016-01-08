/**
 * Created by ghayyas on 1/8/16.
 */

  // define our Controller here


app.controller('todoCtrl', function (firebaseLogin, $firebaseArray) {
    var _self = this;   //Beacuse we Use Controller As
    this.firebaser = firebaseLogin;  //this is because we define our service named as firebase Login
    this.list = $firebaseArray(this.firebaser);  // we Put All Firebase array to the list

    this.list.$loaded().then(function() {    // this function  is created beacuse we need to see the remaining items in an Array
        _self.remaining = _self.list.length; // data is loaded here
    });

    this.add = function(){      // this function add our data to firebase

        _self.list.$add({text: _self.tod.todoRun, done: false});
        _self.remaining++;    // when new data is added remaining items will be Incremented
        _self.tod.todoRun = " ";  //beacuse we need to empty our input



    };

    this.selected = 0;   //by default when page is loaded we not selected any thing.


    this.changeVal = function (todo) {     // this function beacause we need to Change our Selected Value either true or false
        //console.log(todo);
        _self.list.$save(todo);     // if Clicked on checkbox value will be true
        if(todo.done) {
            _self.selected--;   //if unselect or Value if false Selected value decrement
        }
        else {

            _self.selected++;   //if select or Value if false Selected value increment
        }
    };

    this.archive = function() {    //to remove our Selected Data
        angular.forEach(_self.list, function(todo) {           //we Run a foreach loop to remove  only Selected Value
            if (todo.done) {                       // if value is true
                _self.list.$remove(todo);    //  remove the item
                _self.selected = 0;     // selectd value will be 0;
                _self.remaining--;   // selected remaining will be decremented
            }

        });
    };

});