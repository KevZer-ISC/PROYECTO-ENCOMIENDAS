using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Capa3_Dominio.Entidades
{
    public class Itinerario
    {
        public Boolean EstadoItinerario { get; set; }
        public DateTime HoraLLegada { get; set; }
        public DateTime HoraSalida { get; set; }
        public int IdItinerario { get; set; }
        public int LugarDestino { get; set; }
        public int LugarLLegada { get; set; }

        public void ActualizarCapacidadBus()
        {
        }

        public Boolean ValidarCapacidadBus()
        {
            return false;
        }




    }
}
