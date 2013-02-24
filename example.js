#!/usr/bin/env node

var JLick = require("./index");

var jlick = new JLick();

jlick.on("data", function(e) {
  console.log(e);
});

jlick.on("error", function(e) {
  console.log(e);
});

jlick.write(JSON.stringify({a: "b", c: "d"}) + "\n");
jlick.write(JSON.stringify({a: "b", c: "d"}) + "\n");
jlick.write("not real data\n");
jlick.write(JSON.stringify({a: "b", c: "d"}) + "\n");
