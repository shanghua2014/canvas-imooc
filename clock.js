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
    // 画圆
    ctx.arc(0, 0, r-ctx.lineWidth/2, 0, 2 * Math.PI, false);
    // 绘制路径
    ctx.stroke();
    ctx.closePath();
    
    // 垂直居中
    ctx.textAlign = 'center';
    // 水平居中
    ctx.textBaseline = 'middle';

    let hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
    hourNumbers.forEach((number, i) =>{
        /**
         * 弧度算法讲解：
         * 一个圆的总弧度是：2π（2 * Math.PI）
         * 12个数字，每个数字的弧度是：2π/12 (2 * Math.PI / 12)
         * 每个数字所对应的弧度就是：2 * Math.PI / 12 * i
         * 
         * 数字坐标算法讲解：
         *      三角函数 sin (直角三角形30度角 对边/斜边)
         *      三角函数 cos (直角三角形30度角 对边/邻边)
         *      数字x轴坐标其实就是求 邻边 的长度：cos * 对边 (Math.cos(rad) * r)
         *      数字y轴坐标其实就是求 对边 的长度：sin * 斜边 (Math.sin(rad) * r)
         */
        let rad = 2 * Math.PI / 12 * i;
        let x = Math.cos(rad) * (r - 40);
        let y = Math.sin(rad) * (r - 40);
        if (i % 3 === 0) {
            ctx.fillStyle = 'red'
            ctx.font = '22px Arial';
        } else {
            ctx.font = '18px Arial';
            ctx.fillStyle = '#000'
        }
        ctx.fillText(number, x, y);

        // 绘制秒数点
        for(let i=0; i<60; i++) {
            let rad = 2 * Math.PI / 60 *i;
            let x = Math.cos(rad) * (r - 20);
            let y = Math.sin(rad) * (r - 20);
            ctx.beginPath();
            if (i % 5 === 0) {
                ctx.fillStyle = '#000'
                ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
            } else {
                ctx.fillStyle = '#ccc'
                ctx.arc(x, y, 2, 0, 2 * Math.PI, false);
            }
            ctx.fill();
            ctx.closePath();
        }
    });
}

drawBackground();