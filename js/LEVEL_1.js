function LEVEL_1()
{

   this.update=function()
   {
 
   };
   
   this.draw=function()
   {    	
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
