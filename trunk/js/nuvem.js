function Nuvem(file, size_x, size_y, position_x, position_y)
{
	this.image = new Image();
	this.image.src= file;
	
	this.visible = true;
		
	this.position_x_dst = position_x; 
    this.position_y_dst = position_y;
    
    this.scale_x = 1;
    this.scale_y = 1;
    
	this.size_x_src = size_x;
	this.size_y_src = size_y;
	
	this.size_x_dst = this.size_x_src;
	this.size_y_dst = this.size_y_src;
	
	this.position_x_src = 0; 
    this.position_y_src = 0;
    
    this.velocity_x = 0;
    this.velocity_y = 0; 

	this.speed = 1;//velocity, acceleration... TO DO cannot put vel higher then a certain maximum value
	
	this.friction = 0.99;//desacceleration... TO DO cannot put vel less than zero

	this.rotation = 0;	
	this.rotateSpeed = 1;
    
    this.current_frame = 0;
	
	this.frames = 1;	
	
	this.fps = 1;	
	this.time_per_frame = 1000/this.fps;	
	this.setFPS=function(newFPS)
	{
		this.fps = newFPS;	
		this.time_per_frame = 1000/this.fps;	
	}
	
	this.delta_time = 0;
    this.acumulated_delta_time = 0;	
	this.last_draw_time = 0;	
	
	this.right = false;
    
    this.left = false;
    
    this.up = false;
    
    this.down = false;
    
    this.space_pressed = false;
    
    this.space_released = true;
    
    this.space_pressing = false;
    
    this.shoots = new Array();
    
    this.update=function()
    {    	    	
    	//this.Move();
		
		this.AutoMove();
		
		this.Turn();
		
		this.Accelerate();
    	
    	this.Boundaries();
		
		//http://stackoverflow.com/questions/2677671/how-do-i-rotate-a-single-object-on-an-html-5-canvas
		//how to draw a turned image
		
		if(this.space_pressing)
		{
			this.shoots.push(new Shoot(this.position_x_dst, this.position_y_dst, this.rotation));
		}
		
		//atualizando os tiros (mover, colidir...)
		for(var i = 0; i < this.shoots.length; i++)
		{
			this.shoots[i].update();
		}
		
		//removendo os tiros nao visiveis da lista
		for(var i = 0; i < this.shoots.length; i++)
		{
			if(!this.shoots[i].visible)
			{
				this.shoots.splice(i, 1);
			}
		}
		
		//console.log("QTS TIROS "+this.shoots.length);
		
		//array.splice(index,howmany
    };
    
    this.Move=function()
    {
    	if(this.right)
    	{
    		this.position_x_dst += this.velocity_x;
    	}
    	if(this.left)
    	{
    		this.position_x_dst -= this.velocity_x;
    	}
    	
    	if(this.up)
    	{
    		this.position_y_dst -= this.velocity_y;
    	}
    	if(this.down)
    	{
    		this.position_y_dst += this.velocity_y;
    	}
		
    }
	
	this.Accelerate=function()
	{
		if(this.up)
		{
			if((Math.sqrt(this.velocity_x*this.velocity_x+this.velocity_y*this.velocity_y) < 20))
			{
				this.velocity_x += Math.cos(this.degreesToRadians(this.rotation)) * this.speed;
				this.velocity_y += Math.sin(this.degreesToRadians(this.rotation)) * this.speed;
			}
						
		}
		if(this.down)
		{
			this.velocity_x -= Math.cos(this.degreesToRadians(this.rotation)) * (this.speed/4);
			this.velocity_y -= Math.sin(this.degreesToRadians(this.rotation)) * (this.speed/4);			
		}
		else
		{
			//to do refactor, calculo o tempo todo
			this.velocity_x *= this.friction;
			this.velocity_y *= this.friction;			
		}
	}
	
	this.Turn=function()
	{
		if(this.right)
		{
			this.rotation += this.rotateSpeed;
		}
		if(this.left)
		{
			this.rotation -= this.rotateSpeed;
		}
		
		//console.log(this.rotation);
	}
	
	this.AutoMove=function()
	{
		this.position_x_dst += this.velocity_x;
		this.position_y_dst += this.velocity_y;
	}
    
    this.Boundaries=function()
    {
    	//saida pela direita volta pra esquerda
    	if(this.position_x_dst + this.size_x_dst*this.scale_x < 0)
    	{
    		this.position_x_dst = SCREENWIDTH;
    	}
    	
    	//saida por cima volta por baixo
    	if(this.position_y_dst + this.size_y_dst*this.scale_y < 0)
    	{
    		this.position_y_dst = SCREENHEIGHT;
    	}
    	
    	//saida pela esquerda volta pela direita
    	if(this.position_x_dst > SCREENWIDTH)
    	{
    		this.position_x_dst = - this.size_x_dst*this.scale_x;
    	}
    	
    	//saida por baixo volta por cima
    	if(this.position_y_dst > SCREENHEIGHT)
    	{
    		this.position_y_dst = - this.size_y_dst*this.scale_y;
    	}
		 
    }
	
	/*
	this function takes a number in degrees, like 30, 45, 90
	that are easier to humans remember and think of, and
	convert it to radians, thats what the sin() and cos() functions use
	
	radians are the standard unit of angular measure, and are numerically
	equal to the length of a corresponding arc of a unit circle, so one radian
	is just under 57.3 degrees (when the arc length is equal to the radius), one circle has 2PI radians
	
	http://en.wikipedia.org/wiki/Radian
	*/
	this.degreesToRadians=function(degrees)
	{
		return degrees * Math.PI / 180;
		
		/*
		What are the mathematical constants of Javascript?
		
		Math.E
		Math.PI
		Math.SQRT2
		Math.SQRT1_2
		Math.LN2
		Math.LN10
		Math.LOG2E
		Math.LOG10E
		
		What are their values?
		
		console.log(Math.PI);
		
		What are they use for?
		
		Research.
		
		*/
	}

    
    this.draw=function()
    {			
		screen.save();
		 
		screen.translate(this.position_x_dst+this.size_x_dst/2,this.position_y_dst+this.size_y_dst/2);
		
		screen.rotate(this.degreesToRadians(this.rotation));

		screen.translate(-(this.position_x_dst+this.size_x_dst/2),-(this.position_y_dst+this.size_y_dst/2)); 
		
		if(this.visible)
        screen.drawImage(this.image,
        				 this.size_x_src*this.current_frame,
        			 	 this.position_y_src,
        			 	 this.size_x_src, 
        			 	 this.size_y_src, 
        			 	 this.position_x_dst, 
        			 	 this.position_y_dst, 
        			 	 this.size_x_dst*this.scale_x,
        			 	 this.size_y_dst*this.scale_y);
		
		screen.restore();
		
		this.delta_time = Date.now() - this.last_draw_time;
		
		if(this.acumulated_delta_time > this.time_per_frame)
		{
			this.acumulated_delta_time = 0;
			this.current_frame++;
			if(this.current_frame>=this.frames)
			{
				this.current_frame = 0;
			}
		}
		else
		{
			this.acumulated_delta_time += this.delta_time;
		}
		
		this.last_draw_time = Date.now();
		
		for(var i = 0; i < this.shoots.length; i++)
		{
			this.shoots[i].draw();
		}
		
		
    };
    
    this.key_down=function(key)
    {
    		if(key.keyCode == 39)
    		{
    			this.right = true;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.left = true;
    		}
    	
    		if(key.keyCode == 38)
    		{
    			this.up = true;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.down = true;
    		}
    		
    		if(key.keyCode == 32)
    		{
    			this.space_pressing = true;
    		}
    	
    };
    
    this.key_up=function(key)
    {
    		if(key.keyCode == 39)
    		{
    			this.right = false;
    		}
    		else if(key.keyCode == 37)
    		{
    			this.left = false;
    		}
    	
    		if(key.keyCode == 38)
    		{
    			this.up = false;
    		}
    		else if(key.keyCode == 40)
    		{
    			this.down = false;
    		}
    		    		
    		if(key.keyCode == 32)
    		{
    			this.space_pressing = false;
    		}
    	  	
    };  	

}    

