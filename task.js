const Task = function (name, difficulty, urgency, reward) {
this.name = name;
this.difficulty = difficulty;
this.urgency = urgency;
this.reward = reward;
this.completed = false;
}

Task.prototype.complete = function () {
  this.completed = true;
}

module.exports = Task;
