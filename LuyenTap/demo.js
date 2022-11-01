// khia báo biến
var fullName = 'Nguyen The Anh';
var age = 26;
// gọi hàm thông báo
alert (fullName);
// thông báo lần lượt từ phải tắt thông báo thứ nhất thì mới hiện thông báo thứ 2

alert(age);


// giới thiệu một số hàm built - in
// 1 alert
// 2 console
// 3 confirm
// 4 prompt
// 5 Set setTimeout
// se interval
var fullName = 'Nguyen The Anh'
console.log('đay là 1 dong log')// in ra thong báo
console.error // in ra lỗi
confirm('Xác nhận bạn đủ tuổi')// xấc nhận thông báo
prompt('xác nhận bạn đã đủ tuổi') // hiện ra thông báo có thể nhập được dòng 
setTimeout(function() {
alert('thông báo')
},1000)
// dùng dể thực thi một đoạn code sau 1 khoảng thời giân nhất đình
setInterval(function() {
console.log('day là log'+ Math.random)
},1000)// thực thi lên tục


// Giới thieeuj về toán từ trong javaScript
// 1 Toán từ số học - Arithmetic
// 2 Toan tu gan - Assigment
// 3 Toan tu so sanh - Comparsion
// 4 Toan tu logic - Logical


var a =1+2;
console.log(a)
var fullName = 'Nguyen The Anh';
// dau =laf toan tu gan 

 var a =1;
  var b = 2;
  if(a==b){
    alert('dung')
  }