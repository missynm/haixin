$(function(){
	 var smallBox = document.getElementById("smallBox");//小盒子
            var tool = document.getElementById("tool");//小盒子中的黄色区域
            var bigBox = document.getElementById("bigBox");//大盒子
            var bigImg = document.getElementById("bigImg");//放大的图片
            //鼠标进入小盒子区域内，显示黄色区域和大盒子
            smallBox.onmouseenter = function(){
                tool.className = "tool active";
                bigBox.className = "big-box active";
            }
            //鼠标离开小盒子区域，不显示黄色区域和大盒子
            smallBox.onmouseleave = function(){
                tool.className = "tool";
                bigBox.className = "big-box";
            }
            //鼠标在小盒子内移动
            smallBox.onmousemove = function(e){
                var _e = window.event||e;//事件对象
                var x = _e.clientX-this.offsetLeft-tool.offsetWidth/2;//事件对象在小盒子内的横向偏移量
                var y = _e.clientY-this.offsetTop-tool.offsetHeight/2;//竖向偏移量
                if(x<0){
                    x = 0;//当左偏移出小盒子时，设为0
                }
                if(y<0){
                    y = 0;//当上偏移出小盒子时，设为0
                }
                if(x>this.offsetWidth-tool.offsetWidth){
                    x = this.offsetWidth-tool.offsetWidth;//当右偏移出小盒子时，设为小盒子的宽度-黄色放大区域宽度
                }
                if(y>this.offsetHeight-tool.offsetHeight){
                    y = this.offsetHeight-tool.offsetHeight;//当下偏移出小盒子时，设为小盒子的高度-黄色放大区域高度
                }
                tool.style.left = x + "px";//黄色放大区域距离小盒子左偏距
                tool.style.top = y + "px";//黄色放大区域距离小盒子上偏距
                bigImg.style.left = -x*2 + "px";//放大图片移动方向相反，偏移距离加倍
                bigImg.style.top = -y*2 + "px";
            }
})









