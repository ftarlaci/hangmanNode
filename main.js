var game = require('./game.js');
var inquirer = require('inquirer');

inquirer.prompt([{
	name: 'letter',
	type: 'text',
	message: 'Enter a Letter:',
	validate: function(str){
		var reGex = new RegExp("[a_z]");
		return reGex.test(str);
	} 
}]).then(function(answers){
	var letter = answers.letter;

}); //end of inquirer.prompt}

// we need some sort of validation , regular expressions regex is a place to look http://regexr.com/ or eloquent java script regular expression. it requires a lot of computational power. use user input instead. I sued it in train example. I can check that code. chaper 9 EJ 

