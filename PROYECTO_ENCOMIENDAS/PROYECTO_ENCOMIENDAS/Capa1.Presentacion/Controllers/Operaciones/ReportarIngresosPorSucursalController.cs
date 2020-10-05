using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Capa3_Dominio.Entidades;
namespace Capa1.Presentacion.Controllers.Operaciones
{
    [RoutePrefix("ReportarIngresosPorSucursal")]
    public class ReportarIngresosPorSucursalController : Controller
    {
        // GET: ReportarIngresosPorSucursal
        public ActionResult Index()
        {
           
            return View();
        }
        [Route("ReportarIngresosPorSucursal")]

        public ActionResult ReportarIngresosPorSucursal()
        {

            List<Envio> list = new List<Envio>();
            return View(list);

        }

    }
}