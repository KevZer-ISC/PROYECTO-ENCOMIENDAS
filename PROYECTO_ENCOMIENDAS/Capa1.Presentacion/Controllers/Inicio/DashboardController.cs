using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Capa1.Presentacion.Controllers.Inicio
{
    [RoutePrefix("Inicio")]

    public class DashboardController : Controller
    {
        [Route("Dashboard")]
        public ActionResult Dashboard()
        {
            ViewBag.id = 0;
            return View("~/Views/Inicio/Dashboard.cshtml");
        }
    }
}