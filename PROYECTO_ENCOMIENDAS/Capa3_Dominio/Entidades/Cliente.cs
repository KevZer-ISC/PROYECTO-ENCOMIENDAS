using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Capa3_Dominio.Entidades
{
    public class Cliente
    {
        public string Apellidos { get; set; }
        public string Direccion { get; set; }
        public int IdCliente { get; set; }
        public string Nombres { get; set; }
        public int NumeroDocumento { get; set; }
        public int TipoDocumento { get; set; }
        public int sexo { get; set; }

        public int telefonoContacto { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime FechaDeNacimiento { get; set; }









    }
}
