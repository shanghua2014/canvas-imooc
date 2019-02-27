/** @type {HTMLCanvasElement} */

let dom = document.getElementById('clock');
let ctx = dom.getContext('2d');
let width = ctx.canvas.width;
let height = ctx.canvas.height;
let r = width / 2;
console.log(r)

function drawBackground () {
    // 定义圆心
    ctx.translate(r,r);

    ctx.beginPath();
    ctx.lineWidth = 10;
    console.log()
    // 画圆
    ctx.arc(0, 0, r-ctx.lineWidth/2, 0, 2 * Math.PI, false);
    // 绘制路径
    ctx.stroke();
    ctx.closePath();
}

drawBackground();