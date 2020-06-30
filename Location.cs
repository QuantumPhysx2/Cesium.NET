using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Cesium.Models
{
    public class Location
    {
        public int ID { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        [Display(Name = "Created By")]
        public string CreatedBy { get; set; }
    }
}
