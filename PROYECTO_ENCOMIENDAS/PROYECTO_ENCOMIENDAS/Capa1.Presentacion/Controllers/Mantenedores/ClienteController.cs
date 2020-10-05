using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Capa1.Presentacion.Controllers.Mantenedores
{
    [RoutePrefix("Cliente")]

    public class ClienteController : Controller
    {
        [Route("Registro")]
        public ActionResult Registro()
        {
            ViewBag.id = 0;
            return View();
        }

        [Route("Listar")]
        public ActionResult Listar()
        {
            ViewBag.id = 0;
            return View("~/Views/Mantenedores/Cliente/ClienteListar.cshtml");

        }
    }
}