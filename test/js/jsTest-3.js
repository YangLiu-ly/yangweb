// 'use strict';
        // var arr1 = [3, 54 , 56, 'nice', 'here', 123]
        // var ni = arr1.pop();
        // console.log(arr1);
        // console.log('******' + ni);

        // var ni = arr1.shift();
        // console.log(arr1);
        // console.log('******' + ni);

        // arr1.splice(1, 4, 66, 55, 44, 33);
        // console.log(arr1);

        // var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        // console.log(arr2);
        // console.log(arr2.some(function(item, index, arr2){
        //     console.log('item =' + item +'index=' + index )
        //     return item > 2;
        // }));

        // var arr2 = [15, 2, 5, 4, 3, 6, 7, 10, 9]
        // console.log(arr2);
        // console.log(arr2.every(function(item, index, arr2){
        //     console.log('item =' + item +'index=' + index )
        //     return item < 2;
        // }));
        // console.log(Array.isArray( arr2 ));

        // let a = 0;
        // let a = 1;

        /**
         * 冒泡排序
        */
       function sort(arr) {
        for (var j = 0; j < arr.length - 1; j++) {

            for (var i = 0; i < arr.length - 1; i++) {

                if (arr[i] > arr[i + 1]) {

                    var em = arr[i];
                    arr[i] = arr[i + 1];
                    arr[i + 1] = em;
                }
            }
            console.log('****' + arr2)
        }
        return arr2;
    }



    // var arr3 = [
    //     [1,2,3,4,5,6],
    //     [7,8,9,0]
    // ]
    // var arr4 = [];
    // for(var i = 0; i < arr3.length; i++ ){
    //     for(var j = 0; j < arr3[i].length; j++){
    //         arr4.push(arr3[i][j]);
    //     }
    // }
    // console.log(arr4)

    /**
     * 判断回文数
    */

    function palindromic(m) {
        m = m + '';
        if (m.length % 2 === 0) {
            return false;
        }

        var fragment1 = m.slice(0, (m.length - 1) / 2);
        var fragment2 = m.slice((m.length + 1) / 2);

        // fragment1 = m.slice(0, (m.length - 1) / 2);
        // fragment2 = m.slice((m.length + 1) / 2);
        fragment2 = fragment2.split('').reverse().join('');
        // fragment2 = fragment2.reverse();
        // fragment2 = fragment2.join('');
        // if (fragment1 === fragment2) {
        //     console.log(m + '是回文数')
        // } else {
        //     console.log(m + '不是回文数')
        // }

        return fragment1 === fragment2;
    }






    //    palindromic(1235321);
    var arr6 = [0, 5, 2, 15, 20, 11]
    arr6.sort(function (a, b) {
        return b - a;
    })
    // console.log(arr6);


    var str1 = '1234566..6788';
    // var n = (str1.split('6')).lenth - 1;
    // console.log(n);
    // console.log(str1.charCodeAt(4));
    // console.log(str1.indexOf(6));
    // console.log(str1.lastIndexOf('6'));

    // var s='1234566..6788';
    // var n=(s.split('.')).length-1;
    // console.log(n);

    // var str2 = str1.replace("6..6788", "7890");
    // console.log(str2);
    // console.log(str1);
    /*
    *判断字符串的大小
    */
    function howStore(s){
        return s.length;
    }
    // console.log(howStore('54321'));

    /**
    *判断某个字符在字符串中出现的次数,   
    *t代表传入字符串，n代表字符
    */
    function howTimes(t, n){
        var arr1 = [];
        for (var i = 0; i < t.length; i++){

            if(n === t[i]){
                arr1.push(n);
            }
                
        }
        return arr1.length;
    }
    console.log(howTimes('122223354832', '2'));

    /**
    *评论过滤替换作用
    */
    function wordReplace(r){
        r = r.replace('傻逼','**').replace('你好', '**');
        return r;
    }
    // console.log(wordReplace('你好啊，大傻逼'));

    // var ni = 'nihai1526565695'
    

    // // ni = ni.split('5');
    // var ni2 = ni.substring(5, 9);
    // console.log(ni2);

    /**
    *根据文件路径截取文件名和文件后缀
    */
    function jieQu(n){
        var sname = n.substring(n.lastIndexOf('/') + 1, n.lastIndexOf('.'))
        var suffix = n.substring(n.lastIndexOf('.') + 1);
        // var s = sname + ',' + hello; 
        return sname + ',' + suffix;
        

    }
    // console.log(jieQu('./../imgs/hello.java'));

    var ai = '123abc456ABC'
    // ai = ai.toLowerCase();
    // ai = ai.toUpperCase();
    // ai = ''.fromCharCode('dle','dle');
    // console.log(ai);


    /**
    *把每个英文单词的首写字母变成大写
    */
    function wordBig(b){
        b = b.split(" ");

        for(var i = 0; i < b.length; i++){
            b[i] = b[i][0].toUpperCase() + b[i].slice(1);
            // console.log(b[i][0].toUpperCase())
        }
        b = b.join(' ');
        return b;
    }
    // console.log(wordBig('nice to meet you'));
    

    // var kongge = '        12 25 56 5     6 87       '
    // console.log(kongge);
    // kongge = kongge.trim();
    // console.log(kongge.trim());
    // kongge = kongge.trimLeft();
    // console.log(kongge.trimLeft());

    // var str8 = '123456789'
    // console.log(str8.startsWith(1));
    // console.log(str8.endsWith('8', 8));
    // console.log(str8.includes('789', 6)); 
    
    // var num = 12.3;
    // num = Math.abs(num);
    // num = Math.PI
    // console.log(num)

    // var num2 = Math.max(45, 20);
    // var num2 = Math.min(45, 20);
    // console.log(num2);

    // var ra = Math.random() * 56 + 17;
    // ra = parseInt(ra);
    // console.log(ra);

    // var test1 = new Date();
    // var iyear = test1.getFullYear();
    // var imonth = test1.getMonth() + 1;
    // var iweek = test1.getDay();
    // var iday = test1.getDate();
    // var ihours = test1.getHours();
    // var iminutes = test1.getMinutes();
    // var iseconds = test1.getSeconds();

    // console.log ('当前时间为:' + iyear + '年，' + imonth + "月" + iday + '日,' + '星期' + iweek);
    // console.log (ihours + ':' + iminutes + ':' + iseconds);

//    /**
//     * 数组去重，返回去重后的结果
//     * @param {*} arr 
//     */
    // function delRepetition(arr){
    //     var arrT = arr;

    //     for(var i = 0; i < arrT.length; i++){
    //         for(var j = 0; j < arrT.length; j++){
    //             if(arrT[i] === arrT[j] && i !== j){
    //                 arrT.splice(j, 1);  
    //                 j--;
    //             }
    //         }
    //     }
    //     return arrT;
    // }
    // var arr9 = [1,1,3,6,6,8,2,2,1,1,1,1,1,1,1,1,2,2,2,1,1,1];
    // var de = delRepetition(arr9);
    // console.log(arr9);
    // console.log(de);


    /**
     * 数组去重
     * @param {数组} arr 
     */
    function delRepetition (arr) {
        // var newArr = [];
        // for(var i = 0; i < arr.length; i++){
        //     newArr.push(arr[i], 2, 1, 4);
        // }
        // var newArr = arr.slice(0)
        // var newArr = arr.concat([])
        // var newArr = Array.prototype.concat.call(arr, [])
        // newArr.push(123456);

        // 1
        // var newArr = [].concat(arr)
        // for(var i=newArr.length-1; i >= 0; i--){}

        // 2
        var newArr = []
        arr.forEach(function(item, index){
            if (!includes(newArr, item)) {
                newArr.push(item)
            }
        })

        return newArr;
    }


    /**
     * 查询item是否存在于arr中
     * @param {*} arr 
     * @param {*} item 
     */
    function includes( arr, item ){
        for(var i=0; i<arr.length; i++){
            if(arr[i] === item){
                return true;
            }
        }

        return false;
    }


    // var arr = [1,22,2,2,2,2,33,3,3,3,3,3,4,5,6,1,2,2,2,2,2,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6];
    // var newArr = delRepetition(arr)

    // console.log(arr)
    // console.log(newArr)



    // window.alert('123');
    // window.prompt('请输入ID号');
    // window.confirm('请输入ID号');
    // window.setTimeout(function(){
    //     close('http://www.w3school.com.cn/jsref/met_win_confirm.asp') 
    // },2000)

    var strs = '你好啊同学'
    // var it = encodeURI(strs);
    // it = decodeURI(it)
    // alert(it);

    // var it1 = escape(strs);
    // it1 = unescape(strs);
    // alert(it1);

    // eval('var x = 12; var y = 10; alert(x+y);')

//    var usr = screen.availWidth 
//    alert(usr)
    var m = prompt();
    if(m == 1){
        history.go(-1);
    }