const fs = require("fs");
const readline = require("readline");

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

r1.question(
	"Hello I'm Divine and Welcome to my own text editor. 🌚 \n What's your name? ->: ",
	(answer) => {
		console.log(` \n Nice to meet you ${answer}. 😡😡😡😡 \n 
        `);

		r1.question(
			"Select 1 to create a txt file. Select 2 to edit a txt file \n (1/2): ",
			(answer2) => {
				if (+answer2 === 1) {
					console.log("Create a file");
					const currentDirectory = process.cwd();
					r1.question(
						`\n You are currently in ${currentDirectory}. Your txt file will be created here. 

                        What do you wish to name your file? \n (Example: '${answer}.txt')`,
						(answer3) => {
							fs.writeFile(`./${answer3}.txt`, "", (err) => {
								if (err) {
									console.log("An error occured");
									r1.close();
								}
								console.log(`File created ${answer3.split(".")[0]}.txt`);
								r1.close();
							});
						}
					);
				}
				if (+answer2 === 2) {
					console.log("Edit a file");
					r1.close();
				}

				if (+answer2 !== 1 && +answer2 !== 2) {
					console.log("Invalid Reply");
					r1.close();
				}
			}
		);
		// r1.close();
	}
);
