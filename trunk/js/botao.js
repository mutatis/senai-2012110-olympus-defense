function Button(file, size_x, size_y, pos_x, pos_y)
{
	this.img = new Image();
	this.img.src = file;
	this.visible = true;
	this.size_x = size_x;
	this.size_y = size_y;
	this.position_x = pos_x;
	this.position_y = pos_y;
   
   this.update=function()
   {
   
   };
   
   this.draw=function()
   {
		if(this.visible)
		screen.drawImage(this.img, this.position_x, this.position_y);
   };
   
   this.mouse_down=function(mouse)
   {
   	
   };
   
   this.key_down=function(key)
   {
   	
   };
       
   this.mouse_up=function(mouse)
   {
   	
   };
   
   this.key_up=function(key)
   {
   	
   };
   
   this.mouse_move=function(mouse)
   {
   	
   };
   
  this.clicked = function(mouse)
	{//abre botao clicado

	if(Collide(mouse.x-10, mouse.y-12 , 1, 1, this.position_x, this.position_y, this.size_x, this.size_y))
		{
			return true;
		}
		
		return false;
	}	
}


