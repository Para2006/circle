var mouseEvent = "empty" ;
var last_position_of_x , last_position_of_y ;

canvas = document.getElementById("myCanvas");
color =  "red";

ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color ;
ctx.linewidth = 2;
ctx.arc(200,200,40,0,2 * Math.PI );
ctx.stroke();
 


canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e) {
 mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown(e){
    mouse_x = e.clientX - canvas.offsetLeft ;
    mouse_y = e.clientY - canvas.offsetTop ;
    console.log ("X = "+mouse_x +" , Y = "+ mouse_y);
    circle(mouse_x , mouse_y);
}

function circle(current_position_of_mouse_x, c) {
    ctx.beginPath();
    ctx.strokeStyle = color ;
    ctx.linewidth = 2;
    ctx.arc( mouse_x ,mouse_y,40,0,2 * Math.PI );
    ctx.stroke();
}



function my_mousedown(e){
   color = document.getElementById("color").value ;
   width_of_line = document.getElementById("width_of_line").value ;
   radius = document.getElementById("radius").value ;
   mouseEvent ="mouseDown" ;
}

function my_mousemove(e)
{
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft ;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        console.log("current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = width_of_line ;
        ctx.arc(current_position_of_mouse_x , current_position_of_mouse_y , radius , 0, 2 * Math.Pi);
        ctx.strokeStyle();
    }
}


function clear() {
 Consoleclear() ;

}