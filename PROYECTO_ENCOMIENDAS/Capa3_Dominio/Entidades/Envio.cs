using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Capa3_Dominio.Entidades
{
   public class Envio
    {
        public int Cantidad { get; set; }
        public int IdEnvio { get; set; }
        public int Precio { get; set; }

        public double CalcularIngresosTotales()
        {
            return Cantidad * Precio;
        }

        public double CalcularPrecioDeEnvio()
        {
            return  Precio;
        }

        public void CalcularUtilidadDeVenta()
        {
            int Utilidad = 0;
            Utilidad=Utilidad + Precio;
        }

        public double ValidarPesoPaquete()
        {
            int Peso = 0;
            return Peso;
        }


    }
}
