canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokestyle = "Grey";
 ctx.lineWidth = 5;
ctx.rect (150, 143, 430, 200);
 ctx.stroke();

 ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx. lineWidth = 5;
ctx.arc (250, 210, 40 ,0 , 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx. linewidth = 5;
ctx.arc (350, 210, 40 ,0 , 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Red";
ctx. linewidth = 5;
ctx.arc (450, 210, 40 ,0 , 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx. linewidth = 5;
ctx.arc(300, 250, 40 ,0 , 2* Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx. linewidth - 5;
ctx.arc(400, 250, 40 ,0 , 2* Math.PI);
ctx.stroke();