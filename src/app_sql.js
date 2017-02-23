var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",	//TEMP: Empty for now..
  database: "fiuclubs"
});

  //Create Tables

  //USERS_LOGIN
  con.query('CREATE TABLE IF NOT EXISTS USERS_LOGIN ( pid int(7), fname VARCHAR(100), lname VARCHAR(100), email VARCHAR(100), cid int(7), pwd VARCHAR(100), event_subs VARCHAR(100), PRIMARY KEY(pid))',
                function(err, result){
                    // Case there is an error during the creation
                    if(err) {
                        console.log(err);
                    }
                    else{
                        console.log("Table USERS_LOGIN Created OR Already Exists");
                    }
                });

  //EVENTS

  con.query('CREATE TABLE IF NOT EXISTS CLUB_EVENTS ( eid int(7), pid int(7), event_date VARCHAR(100), event_time VARCHAR(100), loc VARCHAR(100), event_desc VARCHAR(100), category VARCHAR(100), PRIMARY KEY(eid))',
                function(err, result){
                    // Case there is an error during the creation
                    if(err) {
                        console.log(err);
                    }
                    else{
                        console.log("Table CLUB_EVENTS Created OR Already Exists");
                    }
                });
  //CLUBS
  con.query('CREATE TABLE IF NOT EXISTS CLUBS ( cid int(7), c_name VARCHAR(100), club_desc VARCHAR(100), admin_pid int(7), category VARCHAR(100), PRIMARY KEY(cid))',
                function(err, result){
                    // Case there is an error during the creation
                    if(err) {
                        console.log(err);
                    }
                    else{
                        console.log("Table CLUBS Created OR Already Exists");
                    }
                });

  //CHAT
  con.query('CREATE TABLE IF NOT EXISTS CHAT ( chat_id int(7), c_name VARCHAR(100), chat_desc VARCHAR(100), admin_pid int(7), category VARCHAR(100), PRIMARY KEY(chat_id))',
                function(err, result){
                    // Case there is an error during the creation
                    if(err) {
                        console.log(err);
                    }
                    else{
                        console.log("Table CHAT Created OR Already Exists");
                    }
                });
