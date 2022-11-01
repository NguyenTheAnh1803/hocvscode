

function checkTen() {
    var ten = document.getElementById('ten_vkl').value;
    if(ten == "") {
        document.getElementById('lbl_ten').innerHTML = "Tên không được để trống";
    }else { 
        document.getElementById('lbl_ten').innerHTML = "Ầu kay";
        return true; 
    }
    return false;
}

function checkHang() {
    var hang = document.getElementById('hang').value;
    if(hang == "") {
        document.getElementById('lbl_hang').innerHTML = "Hãng không được để trống";
    }else {
        document.getElementById('lbl_hang').innerHTML = "Ầu kay";
        return true;
    }
    return false;
}

function checkDate() {
    var ngayHienTai = new Date();
    var ngayRaMat = new Date(document.getElementById('date').value);
    if(document.getElementById('date').value=="") {
        document.getElementById('lbl_ngay').innerHTML = "Ngày Không được để trống";
    }else if(ngayRaMat > ngayHienTai) {
        document.getElementById('lbl_ngay').innerHTML = "Không lớn hơn ngày hiện tại";  
    } else {
        document.getElementById('lbl_ngay').innerHTML = "Ầu kay";
        return true;
    }
    return false;

}

function checkGia() {
    
    var gia = document.getElementById('gia').value;
    if(gia =="") {
        document.getElementById('lbl_gia').innerHTML = "Giá Không được để trống";
    }else if(isNaN(gia)) {
        document.getElementById('lbl_gia').innerHTML = "Bạn phải nhập số";
    }else if(parseInt(gia) < 0){
        document.getElementById('lbl_gia').innerHTML = "Giá trị k được âm";
    }else {
        document.getElementById('lbl_gia').innerHTML = "Ầu kay";
        return true;
    }
    return false;

}
// hàm check dữ liệu
function checkData() {
    checkTen();
    checkHang();
    checkDate();
    checkGia();
    return checkTen() && checkHang() &&  checkDate() && checkGia();
}

/* 
window.onload = function(){
    var htmls = `
            <tr>
                <td>${1}</td>
                <td>${"Core i3 7100"}</td>
                <td>${"intel"}</td>
                <td>${"20/11/2011"}</td>
                <td>${"3.400.000đ"}</td>
            </tr>
            <tr>
                <td>${2}</td>
                <td>${"Core i5 7100"}</td>
                <td>${"intel"}</td>
                <td>${"21/08/2013"}</td>
                <td>${"5.400.000đ"}</td>
            </tr>
        `;
        document.getElementById('table').insertAdjacentHTML('beforeend', htmls);
}
 */
var addBtn = document.getElementById('conduct');
var i = 1;
addBtn.onclick = function() {
    CheckTrung();
    var ten = document.getElementById('ten_vkl').value;
    var hang = document.getElementById('hang').value;
    var date = document.getElementById('date').value;
    var gia = document.getElementById('gia').value;

    if(checkData()) {   
        var htmls = `
            <tr>
                <td>${i++}</td>
                <td class="tenHienTai">${ten}</td>
                <td>${hang}</td>
                <td>${date}</td>
                <td>${gia}</td>
            </tr>
        `;
        document.getElementById('table').insertAdjacentHTML('beforeend', htmls);
    }  
}


var huyBtn = document.getElementById('cancel');
huyBtn.onclick = function() {
    document.getElementById('ten_vkl').value = "";
    document.getElementById('hang').value = "";
    document.getElementById('date').value ="";
    document.getElementById('gia').value = "";
    document.getElementById('lbl_ten').innerHTML = "";
    document.getElementById('lbl_gia').innerHTML = "";
    document.getElementById('lbl_ngay').innerHTML = "";
    document.getElementById('lbl_hang').innerHTML = "";  
}


function CheckTrung() {
    var check = true;
    var ten = document.getElementById('ten_vkl').value;
    var listTenhientai = document.getElementsByClassName('tenHienTai');
    for(var i=0; i<listTenhientai.length;i++) {
        if(listTenhientai[i].value == ten) {
            /* document.getElementById('ten_vkl').focus();
            document.getElementById('lbl_ten').innerHTML = "Đã có tên nhà VKL";
            check = false;
            break; */
            console.log(this.Text);
        }
    }
}
