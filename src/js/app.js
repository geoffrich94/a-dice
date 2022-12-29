// AFRAME & ZAPPAR IMPORTS
import * as AFrame from "aframe";
import * as ZapparAFrame from "@zappar/zappar-aframe";
require('aframe-extras');
console.log("Using AFrame", AFrame.version);
console.log("Using ZapparAFrame", ZapparAFrame);

// STYLESHEET IMPORT
require('../css/styles.css');

// ASSETS IMPORT
require("../assets/dice.gltf");

// JS COMPONENTS IMPORT
require("./components/game-manager.js");
require("./components/roll-dice.js");
