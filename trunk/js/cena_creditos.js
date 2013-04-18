function cena_creditos()
{
	this.background = new fundo("img/credit.png", 595, 841);
	this.Back = new Button("img/Back.png", 399, 41, 140, 490);

   this.update=function()
   {
   	
   };
   
   this.draw=function()
   {
   	
   	this.background.draw();
   	this.Back.draw();
   	screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
        screen.fillText("", 20, 20);
   	
   
   
   };
   
   
    this.mouse_down=function(mouse)
    {
    	console.log("CREDITS mouse X " + mouse.x + " mouse Y " + mouse.y );
    	
    	currentScene = Introducao;
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

}


