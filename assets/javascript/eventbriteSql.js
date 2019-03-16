$(document).ready()

var createRow = function (data) {

                for (i = 0; i < 11; i++) {
                    $(".table-dark tr:last").after("<tr><td>" + data.events[i].name.text + "</td><td>" + data.events[i].venue.address.localized_address_display + "</td><td>" + data.events[i].start.local + "</td><td>" + data.events[i].venue.name + "</td></tr>");

                };

            };
            // for loop

            var findDate = function (name) {
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://immense-savannah-32940.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=charlotte&location.within=10km&expand=venue",
                    "method": "GET",
                    "headers": {
                        "Authorization": "Bearer NU6ISVQ3HWN2QCYFUVXR",
                        "cache-control": "no-cache",
                        "Postman-Token": "62803b82-bc94-43de-99b3-7fd3e21824b3"
                    }
                }

                // event.details:read

                $.ajax(settings).done(function (response) {
                    console.log(response);
                    createRow(response);
                    // console.log(response.name);
                    console.log(name)

                });
            };
        
            findDate();

            var openDatabase = require('websql');
            var db = openDatabase(":memory:", "1.0", "description", 1);
        
            var create = function () {
                db.transaction(function (tx) {
                    tx.executeSql("CREATE TABLE IF NOT EXISTS people (id integer primary key, firstname text, lastname text)");
                });
            }
        
            var insert = function (firstname, lastname) {
                db.transaction(function (tx) {
                    tx.executeSql("INSERT INTO people (firstname, lastname) VALUES (?,?)", [firstname, lastname]);
                });
            }
        
            var select = function () {
                db.transaction(function (tx) {
                    tx.executeSql("SELECT firstname, lastname FROM people", [], function (tx, results) {
                        if (results.rows.length > 0) {
                            for (var i = 0; i < results.rows.length; i++) {
                                console.log("Result -> " + results.rows.item(i).firstname + " " + results.rows.item(i).lastname);
                            }
                        }
                    });
                });
        

            var addUser = $("#submitButton").on("click", function () {
                var fName = $(".firstName").val("");
                var lName = $(".lastName").val("");
                insert(fName, lName);
                console.log(addUser);
            });
        
            create();
            insert();
            select();
        };