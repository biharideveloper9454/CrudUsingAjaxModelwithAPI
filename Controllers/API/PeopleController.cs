using CRUD_Operation_Using_DT_Modal_Ajax.Data;
using CRUD_Operation_Using_DT_Modal_Ajax.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUD_Operation_Using_DT_Modal_Ajax.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly ApplicationContext context;
        public PeopleController(ApplicationContext context)
        {
            this.context = context;
        }
        [HttpGet("GetPerson")]
        public IActionResult GetPerson(int? id)
        {
            var person = context.Peoples.ToList();
            if (id != null)
            {
                person = person.Where(x => x.id == id).ToList();
            }
            return Ok(person);
        }

        [HttpPost("AddPerson")]
        public IActionResult AddPerson([FromBody] People obj)
        {
            if (!ModelState.IsValid)
            {
                return Ok("Input field can't be empty!");
            }
            context.Peoples.Add(obj);
            context.SaveChanges();
            return Ok("Person added successfully!");
        }

        [HttpPost("UpdatePerson")]
        public IActionResult UpdatePerson([FromBody] People obj)
        {
            People people = (from c in context.Peoples
                             where c.id == obj.id
                             select c).FirstOrDefault();
            people.name = obj.name;
            people.Country = obj.Country;
            context.Update(people);
            context.SaveChanges();
            return Ok();
        }

        [HttpPost("DeletePerson")]
        public void DeletePerson(int id)
        {
            People people = (from c in context.Peoples
                             where c.id == id
                             select c).FirstOrDefault();
            context.Peoples.Remove(people);
            context.SaveChanges();
        }

    }

}

