// Iteration #1

require("../db");
const Drone = require("../models/Drone.model");


const drones = [{
    name: "Drone 1",
    propellers: 4,
    maxSpeed: 30,
},
{
name: "Drone 2",
propellers: 7,
maxSpeed: 50,},
{
name: "Drone 3",
propellers: 9,
maxSpeed: 89,
}];

Drone.insertMany(drones).then((dronesFromDb)=> {console.log(`drones created - ${dronesFromDb.length}`)});
