var WINDOW_WIDTH = 1024; // 全局变量屏幕的宽度
var WINDOW_HEIGHT = 768;  // 全局变量屏幕的高度
var RADIUS = 8; // 小球的半径
var MARGIN_TOP = 60; // 第一个数字距离画布顶部的距离 
var MARGIN_LEFT = 30; // 第一个数字距离画布左边的距离

window.onload = function () {
  /** @type HTMLCanvasElement */
  var canvas = this.document.getElementById('canvas'); // 获取canvas元素
  var ctx = canvas.getContext('2d'); // 获取canvas的api

  canvas.width = WINDOW_WIDTH; // 设置canvas的宽度
  canvas.height = WINDOW_HEIGHT; // 设置canvas的调试

  render(ctx); // 渲染倒计时方法
  
}
function render(ctx) { // 绘制canvas的画布,渲染倒计时方法
  var hours = 12, // 小时
      minutes = 34, // 分钟
      seconds = 56; // 钞
  renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours/10), ctx); // 渲染小时的第一个数字
  // 渲染小时的第二个数字，x = 第一个数字距离左边的距离 + 第一个数字占用的距离(14个小圆点*圆点的半径)
  renderDigit(MARGIN_LEFT + 15*(RADIUS+1), MARGIN_TOP, parseInt(hours%10), ctx);
  renderDigit(MARGIN_LEFT + 30*(RADIUS+1), MARGIN_TOP, 10, ctx); // 渲染小时后面的冒号
  renderDigit(MARGIN_LEFT + 39*(RADIUS+1), MARGIN_TOP, parseInt(minutes/10), ctx); // 渲染分钟的第一个数字
  renderDigit(MARGIN_LEFT + 54*(RADIUS+1), MARGIN_TOP, parseInt(minutes%10), ctx); // 渲染分钟的第一个数字
  renderDigit(MARGIN_LEFT + 69*(RADIUS+1), MARGIN_TOP, 10, ctx); // 渲染分钟的后面的冒号
  renderDigit(MARGIN_LEFT + 78*(RADIUS+1), MARGIN_TOP, parseInt(seconds/10), ctx); // 渲染秒钟的第一个数字
  renderDigit(MARGIN_LEFT + 93*(RADIUS+1), MARGIN_TOP, parseInt(seconds%10), ctx); // 渲染秒钟的第一个数字
}

function renderDigit(x, y, num, ctx) { // 渲染数字方法
  ctx.fillStyle = 'rgb(0, 102, 153)';
  for (let i = 0; i < digit[num].length; i++) { // i代表：行，10行
    for (let j = 0; j < digit[num][i].length; j++) { // j代表：列，7列
      if (digit[num][i][j] == 1) { // 这里绘制圆球
        ctx.beginPath(); // 开始路径
        ctx.arc(x+j*2*(RADIUS+1)+(RADIUS+1), y+i*2*(RADIUS+1)+RADIUS+1, RADIUS, 0, 2*Math.PI); // 绘制圆
        ctx.closePath(); // 闭合路径
        ctx.fill(); // 填充
      }
    }
  }
}
