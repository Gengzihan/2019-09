//类数组转 数组的方法
var oLis = document.getElementsByTagName('li');
Object.prototype.trans = function () {
    //this  就是我们要去转化的类数组
    return [...this];
    return Array.from(this)
    return [].slice.call(this)
}
var lis = oLis.trans();

//从数组或者 类数组 随机筛选几项 返回又筛选项组成的新数组

Object.prototype.rm = function (n) {
    //this.length 和 n的情况
    if (n > temp.length) {
        throw new Error('筛选个数不合法');
    }
    //随机筛选n项
    //splice  筛选 其一(Math.round(math.random（）*（this.length-1）))项
    //splice的操作需要执行 n次
    let ary = [];
    let temp = [...this]
    for (var i = 0; i < n; i++) {
        let m = Math.round(Math.random() * (temp.length - 1));
        ary = ary.concat(temp.splice(m, 1))
    }
    return ary;
}
console.log([1, 2, 3, 4, 5].rm(4));//随机筛选了两项，返回值是筛选的项组成的新数组

Array, prototype.unique = function () {
    //双for 去重  每一轮都用当前的项跟后边每一项比较，相等 就把后边的项删除，注意数组塌陷
    //对象去重  利用对象的属性名不能重复的特点
    //indexOf   lastIndexOf  合起来使用的去重；看当前的indexOf 和 lastIndexOf是否相等；相等就是不重复！
    var temp = new Set(this);
    return [...temp];
}

String.prototype.getParame = function () {
    var str = this.split('?')[1];
    var ary = str.split('&');
    var obj = {};
    ary.forEach((item) => {
        // item 是一些 'a=12'  'b=13' 之类的 字符串
        var arr = item.split('=');
        obj[arr[0]] = arr[1];
    })
    return obj;
}
var str = 'https://www.souyidai.com/p2p?id=3964660765015&a=12*b=23'
console.log(str.getParame('id'));//'0987654321`'
console.log(str.getParame('a'));//'12'
console.log(str.getParame('b'));//'23'
console.log(str.getParame());//'整个对象返回'