using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Bai9
{
    public partial class Xuly : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string inputTen = Request.Form["inputTen"];
            string inputHang = Request.Form["inputHang"];
            string inputDate = Request.Form["inputDate"];
            string inputGia = Request.Form["inputGia"];
            string resXML = "<table><tr><td>" + inputTen + "</td><td>" + inputHang + "</td>" + "<td>" + inputDate + "</td><td>" + inputGia + "</td></tr></table>";

            Response.ContentType = "text/xml";
            Response.ContentEncoding = System.Text.Encoding.UTF8;
            Response.Write(resXML);
            Response.Cookies["name"].Value = "Meera Academy";
            Response.Cookies["MeeraAcademy"].Expires = DateTime.Now.AddSeconds(20);
            Response.End();
            //Response.Redirect("~/Xuly2.aspx");
        }
    }
}