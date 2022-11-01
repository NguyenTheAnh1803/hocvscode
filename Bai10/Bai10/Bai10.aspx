<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Bai10.aspx.cs" Inherits="Bai10.Bai10" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" method="post" action="Bai10.aspx" enctype="multipart/form-data">
        <div>
            <label for="Textarea">Textarea: </label>

            <textarea id="txtNoiDung" name="txtNoiDung" rows="4" cols="50">
            
            </textarea>

            <label for="Input File">File: </label>

            <input id="txtFile" name="txtFile" type="file"/>

            <input type="submit" name="btnSubmit" value="Submit" />
            

            
        </div>
    </form>
</body>
</html>
