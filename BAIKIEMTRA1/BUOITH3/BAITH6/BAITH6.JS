const txtNgaysinh = document.querySelector("#txtNgaysinh");
const txtCung = document.querySelector(".txtCung");
const btnExec = document.querySelector("#exec");
const btnCancel = document.querySelector("#cancel");

function zodiacEngine(day, month) {
  switch (month) {
    case 1:
      if (day <= 19) return "Ma Kết";
      else return "Bảo Bình";
    case 2:
      if (day <= 18) return "Bảo Bình";
      else return "Song Ngư";
    case 3:
      if (day <= 20) return "Song Ngư";
      else return "Bạch Dương";
    case 4:
      if (day <= 20) return "Bạch Dương";
      else return "Kim Ngưu";
    case 5:
      if (day <= 20) return "Kim Ngưu";
      else return "Song Tử";
    case 6:
      if (day <= 22) return "Song Tử";
      else return "Cự Giải";
    case 7:
      if (day <= 22) return "Cự Giải";
      else return "Sư Tử";
    case 8:
      if (day <= 22) return "Sư Tử";
      else return "Xử Nữ";
    case 9:
      if (day <= 22) return "Xử Nữ";
      else return "Thiên Bình";
    case 10:
      if (day <= 23) return "Thiên Bình";
      else return "Bọ Cạp";
    case 11:
      if (day <= 22) return "Bọ Cạp";
      else return "Nhân Mã";
    case 12:
      if (day <= 21) return "Nhân Mã";
      else return "Ma Kết";
    default:
      return "Nhập sai!";
  }
}

function onFormSubmitHandler(e) {
  e.preventDefault();
  if (txtNgaysinh.value.trim() === "") {
    alert("Yêu cầu nhập nội dung");
    txtNgaysinh.focus();
  } else {
    const dateFormat = txtNgaysinh.value.trim().split("/");
    console.log(dateFormat);
    const day = Number(dateFormat[0]);
    console.log(day);
    const month = Number(dateFormat[1]);
    console.log(month);
    txtCung.value = zodiacEngine(day, month);
  }
}
btnExec.addEventListener("click", onFormSubmitHandler);
btnCancel.addEventListener("click", function (e) {
  e.preventDefault();
  txtNgaysinh.value = "";
  txtCung.value = "";
});
