var txtChuoi = document.getElementById("txtChuoi");
var ddlDanhsach = document.getElementById("ddlDanhsach");
const arrayItem = [];

const btnExec = document.querySelector("#exec");
btnExec.addEventListener("click", function (e) {
  e.preventDefault();
  ddlDanhsach.innerHTML = "";
  if (txtChuoi.value.trim() === "") {
    alert("Yêu cầu nhập nội dung");
    txtChuoi.focus();
  } else {
    const listItem = txtChuoi.value.split(",");
    if (arrayItem.length > 0) {
      for (var i = 0; i < listItem.length; i++) {
        console.log(arrayItem.indexOf("") === -1);
        console.log(listItem[i].trim() === "");
        if (listItem[i].trim() !== "") {
          if (arrayItem.indexOf(listItem[i].trim()) === -1) {
            arrayItem.push(listItem[i].trim());
          }
        }
      }
    } else {
      for (var i = 0; i < listItem.length; i++) {
        if (listItem[i].trim() !== "") {
          arrayItem.push(listItem[i].trim());
        }
      }
    }

    console.log(arrayItem);
    for (let i = 0; i < arrayItem.length; i++) {
      const option = document.createElement("option");
      option.text = arrayItem[i].trim();
      ddlDanhsach.appendChild(option);
      // ddlDanhsach.add(option);
    }
  }
});
const btnCancel = document.querySelector("#cancel");
btnCancel.addEventListener("click", function (e) {
  e.preventDefault();
  txtChuoi.value = "";
  // ddlDanhsach.innerHTML = "";
});
ddlDanhsach.addEventListener("change", function () {
  alert("Bạn đã chọn mục " + ddlDanhsach.value);
});
