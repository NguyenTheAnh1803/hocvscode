<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="B10.aspx.cs" Inherits="B10.B10" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" method="post" action="B10.aspx" enctype="multipart/form-data" >
        <div>
            <label for="Textarea">Textarea: </label>

            <textarea id="txtNoidung" name="txtNoidung" cols="20" rows="2"></textarea>
            
            <br />
            <label for="Input File">File: </label>

            <input id="txtFile" name="txtFile" type="file" />

            <input id="btnSubmit" type="submit" value="submit" />
        </div>
    </form>
</body>
</html>
