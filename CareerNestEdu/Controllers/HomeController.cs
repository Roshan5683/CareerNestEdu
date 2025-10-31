using System.Diagnostics;
using CareerNestEdu.Models;
using Microsoft.AspNetCore.Mvc;

namespace CareerNestEdu.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Partnership()
        {
        return View();
        }
        public IActionResult Collegepartner()
        {
            return View();
        }
        public IActionResult Lookingjob()
        {
            return View();
        }
        public IActionResult Hiringtalent()
        {
            return View();
        }

        public IActionResult Feature()
        {
        return View();
        }
        public IActionResult College()
        {
        return View();
        }
        public IActionResult LoginSignup()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
