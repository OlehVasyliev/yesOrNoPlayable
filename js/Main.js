window.onload = function() {
	var game = new Phaser.Game(800, 800, Phaser.AUTO, document.getElementById("wrap"));

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Level", Level);

	game.state.start("Level");
	let setNewSize = () => {
		setTimeout(() => {
			// document.body.style.background = "url(./assets/images/bg.png) -49%";
			console.log(game);
			game.scale.setMinMax(window.innerHeight,window.innerHeight,window.innerHeight,window.innerHeight)
			if (window.innerHeight>window.innerWidth) {
				game.camera.bounds.x = 400 - (window.innerWidth*(800/window.innerHeight)/2);
			} else{
				game.camera.bounds.x = 0;
			}
			// game.scale.setUserScale(window.innerHeight,window.innerHeight,window.innerHeight,window.innerHeight)
			// game.scale.setupScale(window.innerHeight,window.innerHeight)
		}, 1);
	}

	
	setNewSize();
	
	window.onresize = () =>{
		setNewSize();
	}
};
