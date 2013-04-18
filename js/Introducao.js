function Introducao()
{
	this.botao_start = new Button("img/Start.png", 159, 40, 150, 650);
        this.botao_creditos = new Button("img/Creditos.png", 159, 40, 150, 700);
        this.botao_instrucao = new Button("img/Instrucao.png", 159, 40, 150, 750)
   
   this.update=function()
   {
   	    this.botao_start.update(); 		
   		this.botao_creditos.update(); 
  	     this.botao_instrucao.update();
   };
   
   this.draw=function()
      {
   	screen.font = "20px Comic Sans MS";
        screen.fillStyle="#000000";
        screen.fillText("Introducao", 20, 20);
		
		this.botao_start.draw(); 		
   		this.botao_creditos.draw(); 
        this.botao_instrucao.draw();


   };
   
   this.mouse_down=function(mouse)
   {
 
	if(this.botao_start.clicked(mouse))
   	{
   	 currentScene = SCENES.LEVEL_1;	
   	}
   	
   	 if(this.botao_creditos.clicked(mouse))
   	{
   	 currentScene = cena_creditos;	
   	}
   	
   	if(this.botao_instrucao.clicked(mouse))
   	{
   	 currentScene = Instrucao;	
   	}
   	
   };
   
   this.mouse_up=function(mouse)
   {
   	
   	console.log("INTRO mouse UP X " + mouse.x + " mouse Y " + mouse.y );
   	
   };
   
   this.key_up=function(key)
   {
   	console.log("INTRO key UP keyCode " + key.keyCode );
   };

   
}
