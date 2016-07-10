
//main.js is where the game is played and contains all of the user-input.

//var inquirer = require('inquirer'); prompt worked better for this assignment. 
var Game = require('./game.js');
var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

game = {
	wordBank: [],
	wordsMatched: 0,
	guessesRemained: 10, 
	currentWord: null, 
	startGame: function(word){
		this.resetGuessesRemained();
		this.currentWord = new Word.Word(Game.Game.wordBank[Math.floor(Math.random()* Game.Game.wordBank.length)]);
		this.currentWord = getLetters(); 
		this.currentWord = renderWord();
		this.rePrompt();
	},

	resetGuessesRemained: function(){
		this.guessesRemained = 10;
	},

	rePrompt: function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result){
			console.log('Your guess is:' + result.guessLetter);

			var numberOfGuess = self.currentWord.checkLetter(result.guessLetter);

			if(numberOfGuess == 0){
				console.log('Wrong guess!');
				self.guessesRemained--;
			} else {
				console.log('Correct guess!');
				game.wordsMatched++;


				if(self.currentWord.wordFound(game.wordsMatched)){
					console.log('Good Job!');
					return;
				}
			}

			console.log('Guesses remaining:', self.guessesRemained);

			if((self.guessesRemained > 0) && (self.currentWord.found == false)){
				self.rePrompt();
			} 
			else if(self.guessesRemained == 0){
				console.log('You lost! The correct word was:', (self.currentWord.word));
			} else{
				console.log(self.currentWord.renderWord());

			}
		});
	}
};

game.startGame();
	

// ([{
// 	name: 'letter',
// 	type: 'text',
// 	message: 'Enter a Letter:',
// 	validate: function(str){
// 		var reGex = new RegExp("[a_z]");
// 		return reGex.test(str);
// 	} 
// }]).then(function(answers){
// 	var letter = answers.letter;

// }); //end of inquirer.prompt}

// we need some sort of validation , regular expressions regex is a place to look http://regexr.com/ or eloquent java script regular expression. it requires a lot of computational power. use user input instead. I sued it in train example. I can check that code. chaper 9 EJ 

