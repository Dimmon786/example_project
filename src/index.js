const hh = require ("hyperscript-helpers");
const { h, diff, patch } = require ("virtual-dom");
const createElement = require ("virtual-dom/create-element");



// A combination of Tailwind classes which represent a (more or less nice) button style
const btnStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";



// The root node of the app (the div with id="app" in index.html)
const rootNode = document.getElementById("app");

// Start the app
app(initModel, update, view, rootNode);

const {app} = require('./App');
const {update} = require('./Update');
const {initModel} = require('./Model');
const {view} = require('./View');