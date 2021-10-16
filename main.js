canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
nasa_array=["bg_1.jpg","mars_1.jpg","mars_2.jpg"];
random_munber=Math.floor(Math.random()*3);
background_image=nasa_array[random_munber];
rover_image="rover.png";

function add()
{
    bg_img=new Image();
    bg_img.onload=uploadbackground;
    bg_img.src=background_image;

    rover_img=new Image();
    rover_img.onload=uploadrover;
    rover_img.src=rover_image;
}
function uploadbackground()
{
    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);
}

function uploadrover()
{
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
   keypressed=e.keyCode;
   console.log(keypressed);
   if(keypressed=='37')
   {
    left();
    console.log("left");
   }
   if(keypressed=='38')
   {
    up();
    console.log("up");
   }
   if(keypressed=='39')
   {
    right();
    console.log("right");
   }
   if(keypressed=='40')
   {
    down();
    console.log("down");
   }
}
function up()
{
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed x="+rover_x,"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down()
{
    if(rover_y<=600)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed x="+rover_x,"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function left()
{
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed x="+rover_x,"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function right()
{
    if(rover_x<=800)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed x="+rover_x,"y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}