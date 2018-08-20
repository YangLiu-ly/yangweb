var classs = [];
var likes = ['打球', '游泳', '爬山', '看书', '打游戏', '看电影', '听音乐', '玩滑板', '跑酷']

function Person (name, age, interest){
    this.name = name;
    this.age = age;
    this.interest = interest;
    this.head = getHeader();
    // this.say = function () {}
}


Person.prototype.skill = function () {
    console.log( '会说话， 会写代码' )
}





function init () {
    // console.log(classs)
    createData();
    render()
}


/**
 * 生成数据
 */
function createData() {
    for (var i=0; i<30; i++) {
        var name = '张三' + i;
        var age = random(18, 24);
        var like = getLike(3)

        var p = new Person(name, age, like);
        classs.push(p)
    }

   
    classs.sort(function(a, b){
        return a.age - b.age; 
    })
}


/**
 * 渲染页面
 */
function render () {
    var html = '';
    for(var i=0; i<classs.length; i++){
        var man = classs[i];

        html += '<li class="student"><img src="' + man.head + '" alt="头像">';
        html += '<h3>' + man.name + '</h3><span class="likes">';
        html += man.interest + '</span></li>';
    }

    document.getElementById('stuContent').innerHTML = html;
}


/**
 * 得到爱好
 */
function getLike( num ){
    var like = []

    while (like.length < num) {
        var index = random(0, likes.length - 1)
        var isExits = false;

        for (var i=0; i<like.length; i++) {
            if (like[i] === likes[index]) {
                isExits = true;
                break;
            }
        }

        if (!isExits) {
            like.push( likes[index] );
        }
    }
    
    return like;
}


/**
 * 获取头像
 */
function getHeader() {
    var picNum = random(1, 10);
    return '../imgs/head/' + picNum +'.png';
}


function random( begin, end ){
    return Math.round(Math.random() * (end - begin) + begin);
}




// init()


/**
 * 插入学生元素到内容
 */
window.onload = init;