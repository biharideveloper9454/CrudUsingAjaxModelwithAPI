using CRUD_Operation_Using_DT_Modal_Ajax.Data;
using CRUD_Operation_Using_DT_Modal_Ajax.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace CRUD_Operation_Using_DT_Modal_Ajax.Controllers.UI
{
    public class DepartmentController : Controller
    {
        private readonly ApplicationContext context;

        public DepartmentController(ApplicationContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult GetDepartment()
        {
            var emp = context.Departments.ToList();
            return new JsonResult(emp);
        }
        public IActionResult AddDepartment([FromBody] Department model)
        {
            var dpt = new Department()
            {
                DepartName=model.DepartName,
                DCode=model.DCode,
            };
            context.Departments.Add(dpt);
            context.SaveChanges();
            return new JsonResult(dpt);
        }

        public IActionResult Delete(int id)
        {
            var result = context.Departments.SingleOrDefault(e => e.Id == id);
            context.Departments.Remove(result);
            context.SaveChanges();
            return new JsonResult(result);
        }

        public IActionResult Edit(int id)
        {
            var result = context.Departments.SingleOrDefault(e => e.Id == id);
            var emp = new Department()
            {
                Id=result.Id,
                DepartName=result.DepartName,
                DCode=result.DCode
            };
            return new JsonResult(emp);
        }
        [HttpPost]
        public IActionResult Update([FromBody] Department obj)
        {
            var dpt = new Department()
            {
                Id= obj.Id,
                DCode= obj.DCode,
                DepartName= obj.DepartName,
            };
            context.Departments.Update(dpt);
            context.SaveChanges();
            return new JsonResult(dpt);
        }
    }
}
