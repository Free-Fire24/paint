var canvas = document.getElementById("canvas");
var mouseEvent = "empty";
var currentMouseX , currentMouseY , lastposX , lastposY ;
var color = "cyan";
var width_of_line = "2";
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

mouseEvent = "mouseDown";

}

canvas.addEventListener("mouseup", mymouseup);


function mymouseup(e)
{
    mouseEvent = "mouseUP";

}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e)
{
    currentMouseX = e.clientX - canvas.offsetLeft;
    currentMouseY = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.linewidth = width_of_line;

        console.log("lastposition of x and y coordinates = ");
        console.log("x =" + lastposX + "y =" + lastposY);
        ctx.moveTo(lastposX, lastposY);

        console.log("current position of x and y coordinates = ");
        console.log("x =" + currentMouseX + "y =" + currentMouseY);
        ctx.lineTo( currentMouseX, currentMouseY);
        ctx.stroke();

    }
 lastposX = currentMouseX;
 lastposY = currentMouseY;
}