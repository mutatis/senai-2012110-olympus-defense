function Level_1()
{
	this.nuvem = new Nuvem("img/nuvem.png", 124, 76, (SCREENWIDTH-210)/2, 0);

   this.update=function()
   {
 		this.nuvem.update();
   };
   
   this.draw=function()
   {    	
   		this.nuvem.draw();
   		//screen.font = "20px Comic Sans MS";
		//screen.fillStyle="#000000";
		//screen.fillText("LEVEL_1", 20, 20);
			

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
   		this.nuvem.key_down(key);    	
   };
   
   this.key_up=function(key)
   {
   		this.nuvem.key_up(key);
   };    
}