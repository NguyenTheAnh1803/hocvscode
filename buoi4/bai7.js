// thêm
var addBtn = document.getElementById('conduct');
addBtn.onclick = function() {
    var htmls = `
        <span id="hang_text">Hãng: </span>
        <input type="text" name="hang" id="hang" value="">
    `;
    document.getElementById('container').insertAdjacentHTML('beforeend', htmls);

    document.getElementById('luu').style.display = 'inline-block';
    document.getElementById('conduct').style.display = 'none';
    
}


// lưu
var luuBtn = document.getElementById('luu');
luuBtn.onclick = function() {
    if(document.getElementById('hang').value =="") {
        alert('Mời bạn nhập dữ liệu!!');
        document.getElementById('hang').focus();
    }
    else {
        var valueItems = document.getElementById('hang').value.split(',');
        var i=1;
        valueItems.forEach(function(ex) {
            ex = ex.trim();
            if(ex!="") {
                var htmls = `<option value"${'giatri'+(i+1)}" >${ex.trim()}</option>`;
                document.getElementById('selected').insertAdjacentHTML('beforeend', htmls);
                i++;  
            }
        }) 
    }
    
}

// hủy
var huyBtn = document.getElementById('cancel');
huyBtn.onclick = function() {
    document.getElementById('luu').style.display = 'none';
    document.getElementById('conduct').style.display = 'inline-block';
    var child_text = document.getElementById('hang_text')
    var input = document.getElementById('hang')
    document.getElementById('container').removeChild(child_text);
    document.getElementById('container').removeChild(input);
   
}


var optionValue = document.getElementById('selected');
optionValue.onchange = function(e) {
    alert("Bạn đã chọn: " + e.target.value);
}

// document.getElementById('conduct').style.display = 'inline-block';
//document.getElementById('luu').style.display = 'none';

