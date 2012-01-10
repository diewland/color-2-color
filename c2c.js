var color2color = {
	// ------- PUBLIC --------------------------------------------
	go: function(c1, c2){
		var check_validate = (this._validate(c1)) && (this._validate(c2));
		if(!check_validate){
			console.error('invalid color code.');
			return [];
		}

		// detect up or down
		var action = c1 > c2 ? 'down' : 'up';

		// core process
		colors = [ c1 ];
		while( c1 != c2 ){
			var c1_buff = '';
			var c1_new;
			for(var i=0; i<6; i++){
				var c1i = c1[i];
				var c2i = c2[i];
				c1_buff += this._move(action, c1i, c2i);
			}
			c1 = c1_buff;
			colors.push( c1 );
		}
		// return
		return colors;
	},
	// ------- PRIVATE --------------------------------------------
	_validate: function(color_code){
		// TODO ??? how to implement ???
		/*
		var color_int = parseInt('0x'+color_code);
		return ( 0x000000 <= color_int ) && ( color_int <= 0xFFFFFF );
		*/
		return true;
	},
	_move: function(action, x, y){
		return x == y
				? y
				: action == 'up'
					? x > y ? y : (parseInt('0x'+x)+1).toString(16)
					: x < y ? y : (parseInt('0x'+x)-1).toString(16);
	}
}
