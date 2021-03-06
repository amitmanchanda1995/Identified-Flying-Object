// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// Adding ar-drone files
var arDrone = require('ar-drone');

//Making a cliet for ARDrone
var client_arDrone = arDrone.createClient();


// on routes that end in /takeoff
// ----------------------------------------------------
router.route('/takeoff')
	//create a takeoff (accessed at POST http://localhost:8080/api/takeoff)
	 .post(function(req, res){
	 	console.log("Takeoff");
                res.json({message : "Aaye aaye! Captain."});
                client_arDrone.takeoff();

         })
         //create a takeoff (accessed at GET http://localhost:8080/api/takeoff)
	        .get(function(req, res){
                 console.log("Takeoff");
                 res.json({message : "Aaye aaye! Captain."});
                 client_arDrone.takeoff();
         });


// on routes that end in /land
// ----------------------------------------------------
router.route('/land')
        //create a land (accessed at POST http://localhost:8080/api/land)
        .post(function(req, res){
                console.log("Land");
                res.json({message : "Fasten your Seat belts. We are going down."});
		client_arDrone.land();
                
        })
	//create a land (accessed at GET http://localhost:8080/api/land)
	.get(function(req, res){
		console.log("Land");
		res.json({message : "Fasten your Seat belts. We are going down."});
		client_arDrone.land();
		
	});

// on routes that end in /forward
// ----------------------------------------------------
router.route('/forward')
	//create a forward (accessed at GET http://localhost:8080/api/forward)
	.get(function(req,res){
		console.log("Forward");
		res.json({message : "If you are a rider, the number one thing to do is to move forward."});
		client_arDrone.front(0.5);

		});

// on routes that end in /back
// ----------------------------------------------------
router.route('/back')
	//create a forward (accessed at GET http://localhost:8080/api/back)
	.get(function(req,res){
		console.log("Back");
		res.json({message : "You know nothing Jon Snow."});
		client_arDrone.back(0.5);

		});

// on routes that end in /up
// ----------------------------------------------------
router.route('/up')
	//create a forward (accessed at GET http://localhost:8080/api/up)
	.get(function(req,res){
		console.log("Up");
		res.json({message : "Stay High All The Time!"});
		client_arDrone.up(0.5);

		});

// on routes that end in /right
// ----------------------------------------------------
router.route('/right')
	//create a forward (accessed at GET http://localhost:8080/api/right)
	.get(function(req,res){
		console.log("Right");
		res.json({message : "Idhar chala mai udhar chala (right :P)"});
		client_arDrone.right(0.5);

		});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
    console.log("Someone visited. Open the gates");
    });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
