var btn1 = document.getElementById('btnRun');
var btn2 = document.getElementById('btnStop');
var lights = document.querySelectorAll('.light span');
var length = lights.length;
var key = 0;
var curIndex = 0;

btn1.onclick = active;

btn2.onclick = function(){
    clearInterval(key);
}
/**
 * 跑马灯运行
 */
function active(){
    clearInterval(key);
    key = setInterval(function(){
        clear();

        // setLight(i, 'active');
        // var n = Math.abs(curIndex - 1);        
        lights[curIndex].className = 'active';
        curIndex ++;
        curIndex = curIndex === length ? 0 : curIndex;  
        curIndex = curIndex === -1 ? length-1 : curIndex; 
        // curIndex = Math.max(0, Math.min(curIndex, length-1))    
        // n = n % length;
    }, 100)
}

function clear(){
    for (var i=0; i<length; i++) {
        lights[i].className = '';
    }
}