<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Form.aspx.cs" Inherits="Bai9.Form" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>

<body>
    <form id="form1" method="post" action="Xuly.aspx">
      <label for="inputTen">Tên VXL</label>
      <input type="text" id="inputTen" name="inputTen" placeholder="Nhâp vxl" />
      <br />
      <label for="">Hãng</label>
      <input type="text" id="inputHang" name="inputHang"/>
      <br />
      <label for="">Ngày ra mắt</label>
      <input type="date" name="inputDate" id="inputDate" />
      <br />
      <label for="">Giá</label>
      <input type="number" name="inputGia" id="inputGia" />
      <br />
      <button type="submit" id="btnThem">Thêm</button>
      <button type="reset">Hủy</button>
    </form>

      <form id="form2" method="get" action="Xuly2.aspx">
      <label for="inputTen">Tên VXL</label>
      <input type="text"  name="inputTen" placeholder="Nhâp vxl" />
      <br />
      <label for="">Hãng</label>
      <input type="text"  name="inputHang"/>
      <br />
      <label for="">Ngày ra mắt</label>
      <input type="date" name="inputDate"  />
      <br />
      <label for="">Giá</label>
      <input type="number" name="inputGia"  />
      <br />
      <button type="submit" >Thêm</button>
      <button type="reset">Hủy</button>
    </form>
</body>
</html>
