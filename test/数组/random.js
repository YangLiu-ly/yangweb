var students = [];
var likes = ['打球', '游泳', '画画', '爬山', '健身', '听歌', '看电影'];
function Person (){
    this.name = setName();;
    this.age = getRandom(18, 23);;
    this.like = getLikes(4).join('-');
    this.header = './../imgs/head/' + getRandom(1, 10) +'.png';
}


/**
 * 把n位学生数据插入studens数组
 */
function putStu(n){
    for(var i=0; i<n; i++){
        var p = new Person();
        students.push(p);
    }
}

putStu(32);
// console.log(students)


/**
 * 将数据插入页面
 */
 function into(){
    var html = '';
    var stu = document.getElementById('stuContent');

    for(var i=0; i<students.length; i++){
        html += '<li class="student"><section class="header fleft"> <img src="'+ students[i].header +'" alt="header"></section>';
        html += '<section class="stuMessage fleft"><h3>' + students[i].name +'</h3>';
        html += '<span>' + students[i].like +'</span></section>'
        html += '<time class="hint fright">12:00</time>'
    } 
    stu.innerHTML = html;
 }

 window.onload = into;

// //menu点击效果
//     var icon = document.querySelectorAll('[data-default]');
//     var iconActive = document.querySelectorAll('[data-active]');
//     for(var i=0; i<icon.length; i++){
//         icon[i].click = function(){
//             icon[i].setAttribute('active');
//         }
//     }
//     console.log(icon)


//插入名字
function setName(){
    var name = getRandom(1, students.length) + '张三';
    return name;
}

/**
 * 得到爱好
 */
// function getLikes(){
//     var like = [];
//     var i = 
//     like.push(likes[i])
//     var j = getRandom(0, likes.length-1);

//     while(i=== j){
//         j = getRandom(0, likes.length-1);
//     }
//     like.push(likes[j]);
//     return like;
// }
function getLikes(nu){
    var like = [];
    var copyArr = [].concat(likes)
    // for(var i=0; i < nu; i++){
    //     like[i] = likes[getRandom(0, likes.length-1)]

    //     for(var j=0; j<i; j++){
    //         if(like[i] === like[j]){
    //             like[j] = likes[getRandom(0, likes.length-1)] 
    //         }
    //     }
    // }
    nu = nu > likes.length ? likes.length: nu;

    for (var i=0; i<nu; i++) {
        var index = getRandom(0, copyArr.length-1);
        
        like.push(copyArr[index])
        copyArr.splice(index, 1)
    }

    return like;
}

/**
 * 得到i-j之间的随机数 
 */
function getRandom(i, j){
    var num = Math.round(Math.random() * (j - i) + i);
    return num;
}

