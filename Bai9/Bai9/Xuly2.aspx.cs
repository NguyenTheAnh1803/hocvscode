using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Bai9
{
    public partial class Xuly2 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string inputTen = Request.QueryString["inputTen"];
            string inputHang = Request.QueryString["inputHang"];
            string inputDate = Request.QueryString["inputDate"];
            string inputGia = Request.QueryString["inputGia"];
            string resXML = "<table><tr><td>" + inputTen + "</td><td>" + inputHang + "</td>" + "<td>" + inputDate + "</td><td>" + inputGia + "</td></tr></table>";
         
            Response.ContentType = "text/xml";
            Response.ContentEncoding = System.Text.Encoding.UTF8;
            Response.Write(resXML);
            Response.End();
        }
    }
}