using CRUD_Operation_Using_DT_Modal_Ajax.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Operation_Using_DT_Modal_Ajax.Data
{
    public class ApplicationContext:DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext>options) : base(options) { }
        public DbSet<People> Peoples { get; set; }
        public DbSet<Department> Departments { get; set; }
    }
}
