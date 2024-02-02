const frame = 1000 / 30;

document.addEventListener('DOMContentLoaded', start ,false);

function draw_line(start_x, start_y, end_x, end_y){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(start_x, start_y);
    ctx.lineTo(end_x, end_y);
    ctx.stroke();
    ctx.closePath();
}

function draw_rectangle(x, y, x_i, y_i)
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 20;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(x_i, y_i);
    ctx.lineTo(x, y_i);
    ctx.lineTo(x, y + y_i);
    ctx.lineTo(x_i, y + x_i);
    ctx.lineTo(x_i, y_i);
    ctx.stroke();
    ctx.closePath();
}

function draw_circle(x, y, rayon, width, color) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, rayon, 0, 2 * Math.PI)
    ctx.stroke();
    ctx.closePath();
}

function clear_screen() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");

    ctx.clear_screen(0, 0, 380, 280);
}



function start(){
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 380, 280);
    ctx.lineWidth = 10;
    draw_rectangle(380, 280, 0, 0);
}
