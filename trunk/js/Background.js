//background.js
function fundo(source)
{
this.img = new Image();
this.img.src= source;
this.loaded = false;
this.visible = true;

this.img.onload = function()
{
loaded = true; 
console.log("Carregado fundo" + loaded);
};

   this.size_x = 595;
   this.size_y = 841;
   this.position_x = 0;
   this.position_y = 0;
   
   
   this.draw=function()
   {
   	if(this.visible)
   	screen.drawImage(this.img, this.position_x, this.position_y);
   }
   

}