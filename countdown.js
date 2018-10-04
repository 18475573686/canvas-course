var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
window.onload = function () {
  /** @type HTMLCanvasElement */
  var canvas = this.document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;

  render(ctx);
  
}
function render(ctx) { // 绘制canvas的画布
  var hours = 12,
      minutes = 34,
      seconds = 56;
  renderDigit(0, 0, parseInt(hours/10), ctx); // 渲染小时的第一个数字
}

function renderDigit(x, y, num, ctx) {
  ctx.fillStyle = 'rgb(0, 102, 153)';
  for (let i = 0; i < digit[num].length; i++) {
    for (let j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) { // 这里绘制圆球
        ctx.beginPath();
        ctx.arc();
        ctx.closePath();
        ctx.fill();
      }
    }
  }
}
