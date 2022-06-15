window.onload = function() {
	var game = new Phaser.Game(800, 800, Phaser.AUTO);

	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Level", Level);

	game.state.start("Level");
	// game.setGameSize(222, 222)
		let setNewSize = () => {
			// 	var width = (window.innerWidth >= screen.width) ? screen.width : window.innerWidth;
			// 	var height = (window.innerHeight >= screen.height) ? screen.height : window.innerHeight;
			// 	// var width = document.body.clientWidth;
			// 	// var height = document.body.clientHeight;
				
			
			setTimeout(() => {
				var width = (window.innerWidth >= screen.width) ? screen.width : window.innerWidth;
				var height = (window.innerHeight >= screen.height) ? screen.height : window.innerHeight;
				let canva = document.querySelector('canvas');
				let scaleCanva = height/document.querySelector('canvas').clientWidth;
				document.querySelector('#wrap').style.cssText= `
					transform: scale(1);
					margin-top: 0px;
					margin-left: 0px;
					width: 800px;
					height: 800px;
				`
				if (width<=height) {

					if(height>document.querySelector('canvas').clientWidth){
						scaleCanva = height/canva.clientWidth;
					} else{
						scaleCanva = canva.clientWidth/height;
					}
					document.querySelector('#wrap').style.cssText= `
						transform: scale(${scaleCanva});
					`
					
				}else{
					if(height>document.querySelector('canvas').clientHeight){
						scaleCanva = canva.clientHeight/height;
					} else{
						scaleCanva = height/canva.clientHeight;
					}
					document.querySelector('#wrap').style.cssText= `
						transform: scale(${scaleCanva});
					`


				}
			}, 111);
		}
	var wrap = function (toWrap, wrapper) {
		wrapper = wrapper || document.createElement('div');
		toWrap.parentNode.appendChild(wrapper);
		wrapper.id = "wrap";
		return wrapper.appendChild(toWrap);
	};
	setTimeout(() => {
		wrap(document.querySelector('canvas'));
	}, 1);


	setNewSize();
	window.onresize = () =>{
		setNewSize();
	}
};
