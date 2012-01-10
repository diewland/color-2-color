var color2color = {
	// ------- PUBLIC --------------------------------------------
	go: function(c1, c2){
		// lower case base
		c1 = c1.toLowerCase();
		c2 = c2.toLowerCase();

		// validate
		var check_validate = (this._validate(c1)) && (this._validate(c2));
		if(!check_validate){
			console.error('invalid color code.');
			return [];
		}

		// core process
		colors = [ c1 ];
		while( c1 != c2 ){
			var c1_buff = '';
			var c1_new;
			for(var i=0; i<6; i++){
				var c1i = c1[i];
				var c2i = c2[i];
				c1_buff += this._move(c1i, c2i);
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
	_move: function(x, y){
		return x == y
				? y
				: x < y
					? (parseInt('0x'+x)+1).toString(16)
					: (parseInt('0x'+x)-1).toString(16);
		/*
		var action = x > y ? 'down' : 'up';
		return x == y
				? y
				: action == 'up'
					? x > y ? y : (parseInt('0x'+x)+1).toString(16)
					: x < y ? y : (parseInt('0x'+x)-1).toString(16);
		*/
	}
}
