
const Hero = function(name, food, speech) {
  this.name = name;
  this.health = 100;
  this.favourite_food = food;
  this.speech = speech;
  this.tasks = [];
}

Hero.prototype.returnName = function () {
  return `My name is ${ this.name }.`
}

Hero.prototype.add = function (task) {
  this.tasks.push(task);
}

Hero.prototype.eatFood = function (foodItem){
  if(foodItem.name === this.favourite_food){
    var foodValue = foodItem.replenish;
    returnValue = foodValue * 1.5;
  }
  else {
    var returnValue = foodItem.replenish;
  }
  this.health += returnValue;
}


Hero.prototype.sortTasksByDifficulty = function() {
  this.tasks.sort(function (a, b) {
  return a.difficulty - b.difficulty});
}

Hero.prototype.sortTasksByUrgency = function() {
  this.tasks.sort(function (a, b) {
  return a.urgency - b.urgency});
}

Hero.prototype.returnCompletedTasks = function() {
  let result = this.tasks.filter(function(task){
    return (task.completed === true);
  });
  return result;
};






module.exports = Hero;
