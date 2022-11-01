using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Bai10
{
    public partial class Bai10 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if(Request.Form["txtNoiDung"]!=null && Request.Files["txtFile"] != null)
            {
                Response.Write(Request.Form["txtNoiDung"]);
                Response.Write(Request.MapPath("~/App_Data/"));
                SaveFile(Request.Files["txtFile"], Request.MapPath("~/App_Data/"));
                Response.End();
            }
        }

        public static void SaveFile(HttpPostedFile file, string path)
        {
            string fileName = file.FileName;
            string filePath = path + fileName;
            file.SaveAs(filePath);
        }

    }

   
}