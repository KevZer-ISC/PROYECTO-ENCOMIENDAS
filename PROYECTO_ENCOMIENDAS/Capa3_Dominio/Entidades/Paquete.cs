using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Capa3_Dominio.Entidades
{
   public class Paquete
    {
        public Boolean Categoria { get; set; }
        public string Descripcion { get; set; }
        public int IdPaquete { get; set; }
        public float Peso { get; set; }
        public List<Paquete> ListaPaquetes { get; }




    }
}
