function Player(file, size_x, size_y, position_x, position_y)
{
	this.image = new Image();
	this.image.src=file;
	
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
    
    this.speed = 0.09;//velocity, acceleration... TO DO cannot put vel higher then a certain maximum value
	
	this.friction = 0.99;//desacceleration... TO DO cannot put vel less than zero
	
	this.rotation = 0;	
	this.rotateSpeed = 1;    
    	
    this.shoots = new Array();
    
	//----animacao do personagem
    this.current_frame = 0;
	//coloque aqui o numero de frames da animacao
	this.frames = 1;	
	
	this.fps = 60;	
	this.time_per_frame = 1000/this.fps;	
	this.setFPS=function(newFPS)
	{
		this.fps = newFPS;	
		this.time_per_frame = 1000/this.fps;	
	}
	
	this.delta_time = 0;
    this.acumulated_delta_time = 0;	
	this.last_draw_time = 0;	
	
	//---------------------------------------
	
	this.right = false;
    
    this.left = false;
    
    this.up = false;
    
    this.down = false;
    
    this.space = false;
    this.space_pressed = false;
    this.space_press = false;
    this.space_released = true;
    
    this.update=function()
    {
    	    	
    	//this.move();
    	
    //	this.keepInScreen();
		
		this.AutoMove();
		
		this.Turn();
		
		this.Accelerate();
    	
    	this.Boundaries();
    	
    	//atirar
    	if(this.space_pressed)
    	{    		
    		//player_position_x, player_position_y, player_velocity_x, player_velocity_y)
    		this.shoots.push(new Shoot(this.position_x_dst, this.position_y_dst, this.rotation));
    	}
    	
    	for(var i = 0; i < this.shoots.length; i++)
    	{
    		this.shoots[i].update();
    	}
				
    	this.space_pressed = false;

	
    };
    
	/*
    this.fall=function()
    {
    	this.position_y_dst += this.velocity_y;
    }
    */
    
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
    
   /*this.keepInScreen=function()
    {
    	//saida pela esquerda
    	if(this.position_x_dst < 0)
    	{
    		this.position_x_dst = 0;
    	}
    	
    	//saida por cima
    	if(this.position_y_dst < 0)
    	{
    		this.position_y_dst = 0;
    	}
    	
    	//saida pela esquerda
    	if(this.position_x_dst > SCREENWIDTH - this.size_x_dst*this.scale_x)
    	{
    		this.position_x_dst = SCREENWIDTH - this.size_x_dst*this.scale_x;
    	}
    	
    	//saida por baixo
    	if(this.position_y_dst > SCREENHEIGHT - this.size_y_dst*this.scale_y)
    	{
    		this.position_y_dst = SCREENHEIGHT - this.size_y_dst*this.scale_y;
    	}
    }*/

 	this.Accelerate=function()
	{
		if(this.up)
		{			
			this.velocity_x += Math.cos(this.degreesToRadians(this.rotation)) * this.speed;
			this.velocity_y += Math.sin(this.degreesToRadians(this.rotation)) * this.speed;			
		}
		
		
		if(this.velocity_x > this.speedMax)
		{
			this.velocity_x = this.speedMax
		}
		
	    if(this.velocity_y > this.speedMax)
		{
			this.velocity_y = this.speedMax
		}
		
		else
		{
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
		
		//console.log("AAAAAAAAAAAAAAAAA");
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
	

	this.degreesToRadians=function(degrees)
	{
		return degrees * Math.PI / 180;
	}

    
    this.draw=function()
    {	
    	screen.save();
		 
		screen.translate((this.position_x_dst+this.size_x_dst/2),
						(this.position_y_dst+this.size_y_dst/2));
		
		screen.rotate(this.degreesToRadians(this.rotation));

		screen.translate(-(this.position_x_dst+this.size_x_dst/2),
						 -(this.position_y_dst+this.size_y_dst/2)); 
    			
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
    			if(this.space_released)
    			{
    				this.space_released = false;
    				this.space_pressed = true;
    			}
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
    			this.space_released = true;
    		}
    	  	
    }; 	

} 