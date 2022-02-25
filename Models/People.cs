using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Operation_Using_DT_Modal_Ajax.Models
{
    public class People
    {
        [Key]
        [Display(Name = "UniqueId")]
        public int id { get; set; }

        [Display(Name = "Name")]
        public string name { get; set; }
    }
}
