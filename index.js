var Steez = require("steez"),
    util = require("util");

var JLick = module.exports = function JLick(terminator) {
  Steez.call(this);

  if (typeof terminator === "undefined") {
    this.terminator = "\n";
  } else {
    this.terminator = terminator;
  }

  this.buffer = Buffer(0);
};
util.inherits(JLick, Steez);

JLick.prototype.write = function write(data) {
  this.buffer += data;

  if (this.buffer.indexOf(this.terminator) !== -1) {
    var lines = this.buffer.split(this.terminator);
    this.buffer = lines.pop();

    lines.forEach(function(line) {
      try { line = JSON.parse(line); } catch (e) { return; }
      this.emit("data", line);
    }.bind(this));
  }

  return !this.paused && this.writable;
};
