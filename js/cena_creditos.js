function cena_creditos()
{

	this.Back = new Button("img/Back.png", 99, 37, 180, 700);

   this.update=function()
   {
   	
   };
   
   this.draw=function()
   {
   	
   	
   	this.Back.draw();
   	screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
        screen.fillText("Jogo produzido por Malkai, Raphael , Gabriel e Francisco", 20, 20);
   	
   
   
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


