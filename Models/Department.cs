using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Operation_Using_DT_Modal_Ajax.Models
{
    public class Department
    {
        [Key]
        public int Id { get; set; }
        public string DepartName { get; set; }
        public string DCode { get; set; }
    }
}
