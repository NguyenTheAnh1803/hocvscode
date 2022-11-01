using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace B10
{
    public partial class B10 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(Request.Form["txtNoidung"] !=null && Request.Files["txtFile"] != null)
            {
                Response.Write("Nội dung: " + Request.Form["txtNoidung"]);
                Response.Write(" - Địa chỉ đường dẫn file đã lưu: " + Request.MapPath("~/App_Data/"));
                SaveFile(Request.Files["txtFile"], Request.MapPath("~/App_Data/"));
                Response.End();
            }
        }

        public static void SaveFile(HttpPostedFile file, string path)
        {
            //string prefix = DateTime.Now.Day + DateTime.Now.Month + DateTime.Now.Year;
            string fileName = DateTime.Now.Millisecond + file.FileName;
            string filePath = path + fileName;
            file.SaveAs(filePath);
        }
    }
}