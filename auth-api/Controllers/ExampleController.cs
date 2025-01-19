using core_api.Models;
using Microsoft.AspNetCore.Mvc;

namespace core_api.Controllers;

public class ExampleController : BaseApiController
{
    [HttpGet("GetExampleData")]
    public ExampleModel GetExampleData()
    {
      var exampleModel = new ExampleModel 
      {
        Id = new Random().Next(1, 100).ToString(),
        Text = "Text",
        RandomNumber = new Random().Next(1, 100)
      };

      return exampleModel;
    }

    [HttpGet("GetExampleData/{id}")]
    public ExampleModel GetExampleDataById(string id)
    {
        var exampleModel = new ExampleModel
        {
            Id = id,
            Text = "Text",
            RandomNumber = new Random().Next(1, 100)
        };

        return exampleModel;
    }
}
