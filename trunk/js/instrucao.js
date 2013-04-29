function Instrucao()
{

//file, size_x, size_y, pos_x, pos_y
this.Back = new Button("img/Back.png", 399, 41, 240, 490);

   
   this.update=function()
   {

   };
   
   this.draw=function()
   {
   	
   	this.Back.draw(); 
   	screen.font = "20px Comic Sans MS";
	screen.fillStyle="#000000";
	screen.fillText("fsdg asshsf h", 20, 20);
	 
   };
   
   
     this.mouse_down=function(mouse)
  {

	if(this.Back.clicked(mouse))

   	{
   	console.log("cena creditos mouse X " + mouse.x + " mouse Y " + mouse.y );
   	
   	currentScene = SCENES.INTRODUCAO;
   	};
   
  }
	   
   
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
