function LEVEL_1()
{
	this.nuvem = new Nuvem("img/png/sprite_nuven.png", 120, 75, (SCREENWIDTH-94)/2, 0);

   this.update=function()
   {
 this.nuvem.update();
   };
   
   this.draw=function()
   {    	
   	this.nuvem.draw();
   	screen.font = "20px Comic Sans MS";
	screen.fillStyle="#000000";
	screen.fillText("LEVEL_1", 20, 20);
			

   };
       
   this.mouse_down=function(mouse)
   {
   	console.log("LEVEL_1  mouse X " + mouse.x + " mouse Y " + mouse.y );
   };

   this.mouse_up=function(mouse)
   {
   	
   	
   };

   this.key_down=function(key)
   {
   	console.log("LEVEL_1 keyCode " + key.keyCode );
   	    	
   };
   
   this.key_up=function(key)
   {
   	
   };    
}
